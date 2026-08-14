export interface HTMLAudioState {
  volume: number;
  playing: boolean;
}

export interface HTMLAudioProps {
  src: string;
  autoReplay?: boolean;
}

export function useAudio(props: HTMLAudioProps) {
  const element = new Audio(props.src);
  const ref = useRef<HTMLAudioElement>(element);

  const [state, setState] = useState<HTMLAudioState>({
    volume: 1,
    playing: false
  });

  const controls = {
    play: (): Promise<void> | void => {
      const el = ref.current;
      if (el) {
        setState({ ...state, playing: true });
        return el.play();
      }
    },

    pause: (): Promise<void> | void => {
      const el = ref.current;
      if (el) {
        setState({ ...state, playing: false });
        return el.pause();
      }
    },

    toggle: (play?: boolean): Promise<void> | void => {
      const el = ref.current;
      if (el) {
        const shouldPlay = play !== undefined ? play : !state.playing;
        const promise = shouldPlay ? el.play() : el.pause();
        setState({ ...state, playing: shouldPlay });
        return promise;
      }
    },

    volume: (value: number): void => {
      const el = ref.current;
      if (el) {
        value = Math.min(1, Math.max(0, value));
        el.volume = value;
        setState({ ...state, volume: value });
      }
    }
  };
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.loop = !!props.autoReplay;

    const onPlay = () => setState((s) => ({ ...s, playing: true }));
    const onPause = () => setState((s) => ({ ...s, playing: false }));
    const onEnded = () => {
      setState((s) => ({ ...s, playing: false }));
      if (props.autoReplay) {
        controls.play();
      }
    };

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);

    setState({
      volume: el.volume,
      playing: !el.paused
    });

    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, [props.src, props.autoReplay]);

  return [element, state, controls, ref] as const;
}

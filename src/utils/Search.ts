export const Search = {
  debounceEvent: (callback: any, time: number) => {
    let interval: any;
    return (...args: any) => {
      clearTimeout(interval);
      interval = setTimeout(() => {
        interval = null;
        callback(...args);
      }, time);
    };
  },
};

//reference for debounceEvent function https://gist.github.com/nmsdvid/8807205

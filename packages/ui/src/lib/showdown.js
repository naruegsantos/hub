  import showdown from 'showdown'

  const converter = new showdown.Converter({
    tasklists: true
  });

  export {converter}
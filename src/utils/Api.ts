export const Api = {
  GET: async (url: string) => {
    try {
      const data = await fetch(`https://api.github.com/${url}`, {
        headers: {
          "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}` ,
        },
      });
      return await data.json();
    } catch (error) {
      console.log(error, "error");
    }
  },
};

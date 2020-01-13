export default function createWebNavigator(routeConfig) {
  function handleServerRequest(req, res) {
    const { path, query } = req;
    console.log('coming soon', path, query);
    return {}; // navigation prop for this request
  }
  return {
    handleServerRequest,
  };
}

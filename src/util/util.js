export function loadingError(state) {
    const {error, isLoading} = state
    if (error) {
        return <div>{error}</div>;
    }
      if (isLoading) {
        return <div>Loading...</div>;
    }
    return false;
}
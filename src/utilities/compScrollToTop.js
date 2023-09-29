export const compScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
}

export default compScrollToTop;
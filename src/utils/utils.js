function formatDate(dateString) {
    // converts YYYY/MM/DD to Month Day format
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

export default formatDate
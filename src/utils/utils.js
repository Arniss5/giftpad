function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

export default formatDate
module.exports = function check(str, bracketsConfig) {
    const pairs = [];
    bracketsConfig.forEach(element => {
        const open = element[0];
        const close = element[1];
        pairs.push(`${open}${close}`)
    });

    let mustDelete = true;
    while (mustDelete) {
        const prevStr = str;
        pairs.forEach(pair => {
            str = str.replace(pair, '');
        });
        mustDelete = (prevStr !== str);
    }

    return (str.length === 0);
}
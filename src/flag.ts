module.exports = {
    getFlag(name: string) {
        const flagPosition = process.argv.indexOf(name);
        let flagValue = "";
        
        if (flagPosition) {
            flagValue = process.argv[flagPosition + 1] || "";
        }

        return flagValue;
    }
};
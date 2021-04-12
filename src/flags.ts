export function getFlag(flag: string) {
    const flagPosition = process.argv.indexOf(flag);
    let flagValue = "";
    
    if (flagPosition) {
        flagValue = process.argv[flagPosition + 1] || "";
    }

    return flagValue;
}
const parseJson = <T>(value: string | null): T | undefined => {
    try {
        return value === "undefined" ? undefined : JSON.parse(value ?? "");
    }
    catch {
        return undefined;
    }
};

export default parseJson;

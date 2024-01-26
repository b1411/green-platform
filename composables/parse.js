import Parse from "parse";

export function useParse() {
    Parse.initialize(
        "9pY4NqkV1wAGJRPGjbFO4Y7xNFny5XCXC7O3jUw7",
        "vD7fxKzF4YpjHZxerJ2cdINpTbXVAE2JTkRcge3r",
    );

    Parse.serverURL = "https://greenplatform.b4a.io/";
    return Parse;
}

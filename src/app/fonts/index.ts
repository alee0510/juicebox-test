import localFont from "next/font/local";

export const bagossTrial = localFont({
    src: "./BagossTRIALVF.ttf",
    variable: "--font-bagoss-trial",
    weight: "100 900",
});

export const sohneBuch = localFont({
    src: "./Sohne-Buch.otf",
    variable: "--font-sohne-buch",
    weight: "100 900",
});

export const sohneBuchKursiv = localFont({
    src: "./Sohne-BuchKursiv.otf",
    variable: "--font-sohne-buch-kursiv",
    weight: "100 900",
});

export const sohneDreiviertelfett = localFont({
    src: "./Sohne-Dreiviertelfett.otf",
    variable: "--font-sohne-dreiviertelfett",
    weight: "100 900",
});

export const sohneExtrafett = localFont({
    src: "./Sohne-Extrafett.otf",
    variable: "--font-sohne-extrafett",
    weight: "100 900",
});

export const sohneExtrafettKursiv = localFont({
    src: "./Sohne-ExtrafettKursiv.otf",
    variable: "--font-sohne-extrafett-kursiv",
    weight: "100 900",
});

export const sohneExtraleicht = localFont({
    src: "./Sohne-Extraleicht.otf",
    variable: "--font-sohne-extraleicht",
    weight: "100 900",
});

export const sohneExtraleichtKursiv = localFont({
    src: "./Sohne-ExtraleichtKursiv.otf",
    variable: "--font-sohne-extraleicht-kursiv",
    weight: "100 900",
});

export const sohneKraftig = localFont({
    src: "./Sohne-Kraftig.otf",
    variable: "--font-sohne-kraftig",
    weight: "100 900",
});

export const sohneKraftigKursiv = localFont({
    src: "./Sohne-KraftigKursiv.otf",
    variable: "--font-sohne-kraftig-kursiv",
    weight: "100 900",
});

export const sohneLeichtKursiv = localFont({
    src: "./Sohne-LeichtKursiv.otf",
    variable: "--font-sohne-leicht-kursiv",
    weight: "100 900",
});


// Path: src/app/fonts/index.ts
const fonts = {
    bagossTrial,
    sohneBuch,
    sohneBuchKursiv,
    sohneDreiviertelfett,
    sohneExtrafett,
    sohneExtrafettKursiv,
    sohneExtraleicht,
    sohneExtraleichtKursiv,
    sohneKraftig,
    sohneKraftigKursiv,
    sohneLeichtKursiv
}

// get all the fonts variable
export const fontVariables = Object.values(fonts).map((font) => font.variable).join(" ");
export default fonts;
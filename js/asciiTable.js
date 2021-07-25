let asciiTableObject = {
    '0': {byte: "048", code: "00110000"},
    '1': {byte: "049", code: "00110001"},
    '2': {byte: "050", code: "00110010"},
    '3': {byte: "051", code: "00110011"},
    '4': {byte: "052", code: "00110100"},
    '5': {byte: "053", code: "00110101"},
    '6': {byte: "054", code: "00110110"},
    '7': {byte: "055", code: "00110111"},
    '8': {byte: "056", code: "00111000"},
    '9': {byte: "057", code: "00111001"},
    '!': {byte: "033", code: "00100001"},
    '"': {byte: "034", code: "00100010"},
    '#': {byte: "035", code: "00100011"},
    '$': {byte: "036", code: "00100100"},
    '%': {byte: "037", code: "00100101"},
    '&': {byte: "038", code: "00100110"},
    "'": {byte: "039", code: "00100111"},
    '(': {byte: "040", code: "00101000"},
    ')': {byte: "041", code: "00101001"},
    '*': {byte: "042", code: "00101010"},
    '+': {byte: "043", code: "00101011"},
    ',': {byte: "044", code: "00101100"},
    '-': {byte: "045", code: "00101101"},
    '.': {byte: "046", code: "00101110"},
    '/': {byte: "047", code: "00101111"},
    ':': {byte: "058", code: "00111010"},
    ';': {byte: "059", code: "00111011"},
    '<': {byte: "060", code: "00111100"},
    '=': {byte: "061", code: "00111101"},
    '>': {byte: "062", code: "00111110"},
    '?': {byte: "063", code: "00111111"},
    '@': {byte: "064", code: "01000000"},
    'A': {byte: "065", code: "01000001"},
    'ACK': {byte: "006", code: "00000110"},
    'B': {byte: "066", code: "01000010"},
    'BEL': {byte: "007", code: "00000111"},
    'BS': {byte: "008", code: "00001000"},
    'C': {byte: "067", code: "01000011"},
    'CAN': {byte: "024", code: "00011000"},
    'CR': {byte: "013", code: "00001101"},
    'D': {byte: "068", code: "01000100"},
    'DC1': {byte: "017", code: "00010001"},
    'DC2': {byte: "018", code: "00010010"},
    'DC3': {byte: "019", code: "00010011"},
    'DC4': {byte: "020", code: "00010100"},
    'DEL': {byte: "127", code: "01111111"},
    'DLE': {byte: "016", code: "00010000"},
    'E': {byte: "069", code: "01000101"},
    'EM': {byte: "025", code: "00011001"},
    'ENQ': {byte: "005", code: "00000101"},
    'EOT': {byte: "004", code: "00000100"},
    'ESC': {byte: "027", code: "00011011"},
    'ETB': {byte: "023", code: "00010111"},
    'ETX': {byte: "003", code: "00000011"},
    'F': {byte: "070", code: "01000110"},
    'FF': {byte: "012", code: "00001100"},
    'FS': {byte: "028", code: "00011100"},
    'G': {byte: "071", code: "01000111"},
    'GS': {byte: "029", code: "00011101"},
    'H': {byte: "072", code: "01001000"},
    'HT': {byte: "009", code: "00001001"},
    'I': {byte: "073", code: "01001001"},
    'J': {byte: "074", code: "01001010"},
    'K': {byte: "075", code: "01001011"},
    'L': {byte: "076", code: "01001100"},
    '\n': {byte: "010", code: "00001010"},
    'M': {byte: "077", code: "01001101"},
    'N': {byte: "078", code: "01001110"},
    'NAK': {byte: "021", code: "00010101"},
    'NUL': {byte: "000", code: "00000000"},
    'O': {byte: "079", code: "01001111"},
    'P': {byte: "080", code: "01010000"},
    'Q': {byte: "081", code: "01010001"},
    'R': {byte: "082", code: "01010010"},
    'RS': {byte: "030", code: "00011110"},
    'S': {byte: "083", code: "01010011"},
    'SI': {byte: "015", code: "00001111"},
    'SO': {byte: "014", code: "00001110"},
    'SOH': {byte: "001", code: "00000001"},
    ' ': {byte: "032", code: "00100000"},
    'STX': {byte: "002", code: "00000010"},
    'SUB': {byte: "026", code: "00011010"},
    'SYN': {byte: "022", code: "00010110"},
    'T': {byte: "084", code: "01010100"},
    'U': {byte: "085", code: "01010101"},
    'US': {byte: "031", code: "00011111"},
    'V': {byte: "086", code: "01010110"},
    'VT': {byte: "011", code: "00001011"},
    'W': {byte: "087", code: "01010111"},
    'X': {byte: "088", code: "01011000"},
    'Y': {byte: "089", code: "01011001"},
    'Z': {byte: "090", code: "01011010"},
    '[': {byte: "091", code: "01011011"},
    '\'': {byte: "092", code: "01011100"},
    ']': {byte: "093", code: "01011101"},
    '^': {byte: "094", code: "01011110"},
    ':': {byte: "096", code: "01100000"},
    'a': {byte: "097", code: "01100001"},
    'b': {byte: "098", code: "01100010"},
    'c': {byte: "099", code: "01100011"},
    'd': {byte: "100", code: "01100100"},
    'e': {byte: "101", code: "01100101"},
    'f': {byte: "102", code: "01100110"},
    'g': {byte: "103", code: "01100111"},
    'h': {byte: "104", code: "01101000"},
    'i': {byte: "105", code: "01101001"},
    'j': {byte: "106", code: "01101010"},
    'k': {byte: "107", code: "01101011"},
    'l': {byte: "108", code: "01101100"},
    'm': {byte: "109", code: "01101101"},
    'n': {byte: "110", code: "01101110"},
    'o': {byte: "111", code: "01101111"},
    'p': {byte: "112", code: "01110000"},
    'q': {byte: "113", code: "01110001"},
    'r': {byte: "114", code: "01110010"},
    's': {byte: "115", code: "01110011"},
    't': {byte: "116", code: "01110100"},
    'u': {byte: "117", code: "01110101"},
    'v': {byte: "118", code: "01110110"},
    'w': {byte: "119", code: "01110111"},
    'x': {byte: "120", code: "01111000"},
    'y': {byte: "121", code: "01111001"},
    'z': {byte: "122", code: "01111010"},
    '{': {byte: "123", code: "01111011"},
    '|': {byte: "124", code: "01111100"},
    '}': {byte: "125", code: "01111101"},
    '~': {byte: "126", code: "01111110"},
    '_': {byte: "095", code: "01011111"}
}

export {asciiTableObject}
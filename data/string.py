a = """ """
a = (
    a.replace(",", "")
    .replace("'", "")
    .replace("-", " ")
    .replace("?", " ")
    .replace("¿", "")
    .replace("!", " ")
    .replace("¡", " ")
    .replace("(", " ")
    .replace(")", " ")
)
print(a)

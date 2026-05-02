import os

replacements = {
    "Shree Krishna Public School": "Adarsh Children's Senior Secondary School",
    "Shree Krishna": "Adarsh Children's",
    "LKPS English Academy": "Adarsh Children's Early Years",
    "LKPS": "ACEY",
    "Bikaner": "Jaipur",
    "Udairamsar": "Bhankrota",
    "Gangashahar": "Bhankrota",
    "8708275671": "8947097731",
    "9001547343": "8947097731",
    "2004": "2012",
    "15 years": "12 years",
    "20 years": "12 years",
    "20+ years": "12+ years",
    "20+ Years": "12+ Years",
    "20+ year": "12+ year",
    "W7QW+9G6": "Near Radhika Marriage Garden",
    "C-115 Vyapaar Nagar, Gangashahar, Bikaner, Rajasthan": "Near Radhika Marriage Garden, Mukundpura Road, Bhankrota, Jaipur, Rajasthan",
    "skpsudairamsar@gmail.com": "adarshchildrenschool@gmail.com",
    "W7QW+9G6, Udairamsar, Rajasthan 334402": "Near Radhika Marriage Garden, Mukundpura Road, Bhankrota, Jaipur, Rajasthan 302026",
    "334402": "302026",
    "334003": "302026"
}

for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith((".jsx", ".js")):
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            original = content
            for k, v in replacements.items():
                content = content.replace(k, v)
            if original != content:
                with open(path, "w") as f:
                    f.write(content)

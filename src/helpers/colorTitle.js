const colorTitle = title => {
    const titleArr = title.split(" ");
    const lastWord = titleArr.pop();
    const coloredLastWord = `<span style="color: #4F2EE8;">${lastWord}</span>`;
    titleArr.push(coloredLastWord);
    const normalizedTitle = titleArr.join(" ")
    return normalizedTitle
};

export default colorTitle;

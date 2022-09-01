function past(h, m, s){
    const hours = h * 60 * 60 * 1000;
    const minutes = m * 60 * 1000;
    const seconds = s * 1000;
    
    return hours + minutes + seconds;
}
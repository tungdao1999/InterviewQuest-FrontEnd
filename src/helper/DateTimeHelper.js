const ParseISOToDate = function (isoDateString) {
    // Extract the date portion using a regex
    let dateMatch = isoDateString.match(/ISODate\("(.*?)"\)/);
    if (dateMatch) {
        let dateString = dateMatch[1]; // Extracted date string

        // Create a Date object
        let date = new Date(dateString);

        // Format the date to your desired format
        let formattedDate = date.toISOString(); // This will give you '2024-09-07T05:19:32.320Z'

        return formattedDate;
    } else {
        return "Invalid format";
    }
}
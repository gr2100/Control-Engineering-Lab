var table = document.getElementById("studentsmarks");
var section = prompt("Please enter your section", "S2");
var jsonObject = {
    "filterAttribute": "section",
    "filterValue": section
};

fetch('https://ngddxfrpg8.execute-api.us-east-1.amazonaws.com/test/getmarks', {
    method: "post",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonObject)
})
    .then(response => response.json())
    .then(data => {
         console.log(data.body);
        // Check if the response has a body and it's a string (may need additional checks based on your response structure)
        var responseBody = data.body && typeof data.body === 'string' ? JSON.parse(data.body) : [];
        
      responseBody.forEach((student) => {
         var studentMap = new Map(Object.entries(student));
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = studentMap.get("rno") || "N/A";
            cell2.innerHTML = studentMap.get("name")
            cell3.innerHTML = (studentMap.get(`Prelab.EXP1`)) || "N/A";
            cell4.innerHTML = (studentMap.get('Postlab.EXP1')) || "N/A";
            // Check if TESTSCORE is defined and contains EXP1
            cell5.innerHTML = (studentMap.get('TESTSCORE.EXP1'))||"N/A";
        });
    })
    .catch(error => console.error("Error fetching data:", error));

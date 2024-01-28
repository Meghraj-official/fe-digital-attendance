//  --------Takes  data of type -------


//  const assignedSubjects = [
//     {
//         "_id": "65b5575c58ae093157130174",
//         "name": "Advanced Java",
//         "code": "CSC-413",
//         "courseCode": "CSIT",
//         "courseType": "SEMESTER",
//         "semester": "7",
//         "__v": 0
//     },
//     {
//         "_id": "65b612c19b92577a267242d7",
//         "name": "BEd",
//         "code": "Csc567",
//         "courseCode": "BSC CSIT",
//         "courseType": "YEARLY",
//         "year": "3",
//         "__v": 0
//     }
// ]
 export  function FormatAssignSubjects(data)  {
    if(!data)
    {
        return null
    }
    const transformedData = [];

    data.forEach(subject => {
        const label = subject.name;
        const value = subject.code;

        transformedData.push({ label, value });
    });

    return transformedData;

 }

//  Returns
//  [
//     {
//         "label": "Advanced Java",
//         "value": "CSC-413"
//     },
//     {
//         "label": "BEd",
//         "value": "Csc567"
//     }
// ]
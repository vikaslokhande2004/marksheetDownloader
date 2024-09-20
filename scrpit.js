let jsonData = [];


function fetchExcelFile() {
    // Fetch the Excel file from the public folder
    fetch('Book1.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            // Parse the Excel file
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0]; // Get the first sheet name
            const worksheet = workbook.Sheets[firstSheetName]; // Get the sheet data
            jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert to JSON

            console.log(jsonData);
        })
        .catch(error => {
            console.error('Error fetching the Excel file:', error);
        });
}

function findStudent() {
    const rollNumber = document.getElementById('rollNumber').value; // Get the roll number input
    const student = jsonData.find((row) => row.PRN == rollNumber); // Find student by roll number
    const resultElement = document.getElementById('result');

    if (student) {
        // resultElement.textContent = JSON.stringify(student, null, 2);
        const MarksheetBox = document.getElementById('Marksheet_Box');
        document.getElementById('buttonpdf').style.display = 'block';
        MarksheetBox.innerHTML = ` <div id="page1-div" style="position:relative;width:918px;height:1188px;">
            <img width: 100%; height: auto; src="https://vikaslokhande2004.github.io/marksheetDownloader/Sem2.png" alt="background image" />
            <p style="position:absolute;top:61px;left:298px;white-space:nowrap" class="ft00">
                Summer&#160;Semester&#160;Examinations&#160;2023&#160;Result</p>
            <p style="position:absolute;top:61px;left:663px;white-space:nowrap" class="ft01">&#160;</p>
            <p style="position:absolute;top:86px;left:78px;white-space:nowrap" class="ft02">&#160;</p>
            <p style="position:absolute;top:106px;left:215px;white-space:nowrap" class="ft03">
                Course:&#160;11242&#160;-&#160;B-Tech&#160;(Computer&#160;Science&#160;&amp;&#160;Engineering)&#160;&#160;&#160;&#160;Year&#160;:2&#160;&#160;&#160;&#160;Semester&#160;:4
            </p>
            <p style="position:absolute;top:106px;left:747px;white-space:nowrap" class="ft04">&#160;</p>
            <p style="position:absolute;top:124px;left:78px;white-space:nowrap" class="ft05">&#160;</p>
            <p style="position:absolute;top:133px;left:825px;white-space:nowrap" class="ft06">&#160;</p>
            <p style="position:absolute;top:149px;left:80px;white-space:nowrap" class="ft07">
                <b>Enrollment&#160;No&#160;:&#160;</b></p>
            <p style="position:absolute;top:149px;left:167px;white-space:nowrap" class="ft08">${student.PRN}&#160;</p>
            <p style="position:absolute;top:149px;left:278px;white-space:nowrap" class="ft07">
                <b>Student&#160;Name&#160;:&#160;</b></p>
            <p style="position:absolute;top:149px;left:367px;white-space:nowrap" class="ft08">${student.Student_Name}</p>
            <p style="position:absolute;top:149px;left:406px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:190px;left:85px;white-space:nowrap" class="ft010"><b>Sr&#160;</b></p>
            <p style="position:absolute;top:207px;left:82px;white-space:nowrap" class="ft010"><b>No</b></p>
            <p style="position:absolute;top:207px;left:99px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:115px;white-space:nowrap" class="ft010"><b>Subject&#160;</b></p>
            <p style="position:absolute;top:207px;left:125px;white-space:nowrap" class="ft010"><b>Code</b></p>
            <p style="position:absolute;top:207px;left:156px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:173px;white-space:nowrap" class="ft010"><b>Subject&#160;Name</b>
            </p>
            <p style="position:absolute;top:190px;left:254px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:273px;white-space:nowrap" class="ft010"><b>Total&#160;</b></p>
            <p style="position:absolute;top:207px;left:264px;white-space:nowrap" class="ft010"><b>Credits</b></p>
            <p style="position:absolute;top:207px;left:306px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:326px;white-space:nowrap" class="ft010"><b>Ma&#160;</b></p>
            <p style="position:absolute;top:207px;left:328px;white-space:nowrap" class="ft010"><b>x&#160;</b></p>
            <p style="position:absolute;top:225px;left:318px;white-space:nowrap" class="ft010"><b>Mark&#160;</b></p>
            <p style="position:absolute;top:242px;left:329px;white-space:nowrap" class="ft010"><b>s</b></p>
            <p style="position:absolute;top:242px;left:336px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:353px;white-space:nowrap" class="ft010"><b>CA</b></p>
            <p style="position:absolute;top:190px;left:371px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:379px;white-space:nowrap" class="ft010"><b>MT&#160;</b></p>
            <p style="position:absolute;top:205px;left:384px;white-space:nowrap" class="ft010"><b>E</b></p>
            <p style="position:absolute;top:205px;left:393px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:410px;white-space:nowrap" class="ft010"><b>SS</b></p>
            <p style="position:absolute;top:190px;left:426px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:434px;white-space:nowrap" class="ft010"><b>IP&#160;</b></p>
            <p style="position:absolute;top:205px;left:436px;white-space:nowrap" class="ft010"><b>R</b></p>
            <p style="position:absolute;top:205px;left:445px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:453px;white-space:nowrap" class="ft010"><b>P&#160;R</b></p>
            <p style="position:absolute;top:190px;left:470px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:479px;white-space:nowrap" class="ft010"><b>TW</b></p>
            <p style="position:absolute;top:190px;left:498px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:512px;white-space:nowrap" class="ft010"><b>PR</b></p>
            <p style="position:absolute;top:205px;left:511px;white-space:nowrap" class="ft010"><b>O&#160;R</b></p>
            <p style="position:absolute;top:205px;left:529px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:538px;white-space:nowrap" class="ft010"><b>ETE</b></p>
            <p style="position:absolute;top:190px;left:563px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:572px;white-space:nowrap" class="ft010"><b>Grac&#160;e&#160;</b>
            </p>
            <p style="position:absolute;top:208px;left:575px;white-space:nowrap" class="ft010"><b>Mark</b></p>
            <p style="position:absolute;top:208px;left:606px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:620px;white-space:nowrap" class="ft010"><b>Total&#160;</b></p>
            <p style="position:absolute;top:207px;left:619px;white-space:nowrap" class="ft010"><b>Marks</b></p>
            <p style="position:absolute;top:207px;left:654px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:660px;white-space:nowrap" class="ft010"><b>Total&#160;</b></p>
            <p style="position:absolute;top:208px;left:663px;white-space:nowrap" class="ft010"><b>Mark</b></p>
            <p style="position:absolute;top:226px;left:675px;white-space:nowrap" class="ft010"><b>s</b></p>
            <p style="position:absolute;top:226px;left:681px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:245px;left:675px;white-space:nowrap" class="ft010"><b>+</b></p>
            <p style="position:absolute;top:245px;left:682px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:261px;left:662px;white-space:nowrap" class="ft010"><b>Grace</b></p>
            <p style="position:absolute;top:261px;left:698px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:710px;white-space:nowrap" class="ft010"><b>Out</b></p>
            <p style="position:absolute;top:190px;left:732px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:208px;left:714px;white-space:nowrap" class="ft010"><b>Of&#160;</b></p>
            <p style="position:absolute;top:223px;left:710px;white-space:nowrap" class="ft010"><b>100</b></p>
            <p style="position:absolute;top:223px;left:733px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:241px;left:703px;white-space:nowrap" class="ft010"><b>Marks</b></p>
            <p style="position:absolute;top:241px;left:740px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:746px;white-space:nowrap" class="ft010"><b>Grade</b></p>
            <p style="position:absolute;top:190px;left:783px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:789px;white-space:nowrap" class="ft010"><b>Grade&#160;</b></p>
            <p style="position:absolute;top:205px;left:788px;white-space:nowrap" class="ft010"><b>Points</b></p>
            <p style="position:absolute;top:205px;left:827px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:190px;left:839px;white-space:nowrap" class="ft010"><b>Result</b></p>
            <p style="position:absolute;top:190px;left:878px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:281px;left:87px;white-space:nowrap" class="ft012">1</p>
            <p style="position:absolute;top:281px;left:94px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:106px;white-space:nowrap" class="ft012">BTCOC401</p>
            <p style="position:absolute;top:281px;left:165px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:282px;left:188px;white-space:nowrap" class="ft012">Design&#160;&amp;&#160;
            </p>
            <p style="position:absolute;top:299px;left:183px;white-space:nowrap" class="ft015">
                Analysis&#160;of&#160;<br />Algorithms</p>
            <p style="position:absolute;top:316px;left:242px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:281px;white-space:nowrap" class="ft012">4</p>
            <p style="position:absolute;top:281px;left:288px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:281px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY}</p>
            <p style="position:absolute;top:281px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:385px;white-space:nowrap" class="ft012">${student.__EMPTY_1}</p>
            <p style="position:absolute;top:281px;left:392px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:414px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:281px;left:420px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:281px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:281px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:281px;left:492px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:281px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_2}</p>
            <p style="position:absolute;top:281px;left:554px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:588px;white-space:nowrap" class="ft012">${student.__EMPTY_3}</p>
            <p style="position:absolute;top:281px;left:594px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_4}</p>
            <p style="position:absolute;top:281px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_4}</p>
            <p style="position:absolute;top:281px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:718px;white-space:nowrap" class="ft012">${student.__EMPTY_4}</p>
            <p style="position:absolute;top:281px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:756px;white-space:nowrap" class="ft012">${student.__EMPTY_5}</p>
            <p style="position:absolute;top:281px;left:772px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_4)}</p>
            <p style="position:absolute;top:281px;left:811px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:281px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_4), student.__EMPTY_2,student.__EMPTY_3)}</p>
            <p style="position:absolute;top:281px;left:869px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:87px;white-space:nowrap" class="ft012">2</p>
            <p style="position:absolute;top:351px;left:94px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:105px;white-space:nowrap" class="ft012">BTCOC402</p>
            <p style="position:absolute;top:351px;left:165px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:341px;left:185px;white-space:nowrap" class="ft012">Operating&#160;</p>
            <p style="position:absolute;top:358px;left:191px;white-space:nowrap" class="ft012">Systems</p>
            <p style="position:absolute;top:358px;left:235px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:281px;white-space:nowrap" class="ft012">4</p>
            <p style="position:absolute;top:351px;left:288px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:351px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY_6}</p>
            <p style="position:absolute;top:351px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:385px;white-space:nowrap" class="ft012">${student.__EMPTY_7}</p>
            <p style="position:absolute;top:351px;left:392px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:415px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:351px;left:421px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:351px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:351px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:351px;left:492px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:351px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:588px;white-space:nowrap" class="ft012">${student.__EMPTY_9}</p>
            <p style="position:absolute;top:351px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_8}</p>
            <p style="position:absolute;top:351px;left:593px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_10}</p>
            <p style="position:absolute;top:351px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_10}</p>
            <p style="position:absolute;top:351px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:718px;white-space:nowrap" class="ft012">${student.__EMPTY_10}</p>
            <p style="position:absolute;top:351px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:756px;white-space:nowrap" class="ft012">${student.__EMPTY_11}</p>
            <p style="position:absolute;top:351px;left:772px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_10)}</p>
            <p style="position:absolute;top:351px;left:811px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:351px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_10), student.__EMPTY_8,student.__EMPTY_9)}</p>
            <p style="position:absolute;top:351px;left:869px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:87px;white-space:nowrap" class="ft012">3</p>
            <p style="position:absolute;top:391px;left:94px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:109px;white-space:nowrap" class="ft012">BTHM403</p>
            <p style="position:absolute;top:391px;left:162px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:381px;left:178px;white-space:nowrap" class="ft012">Basic&#160;Human&#160;
            </p>
            <p style="position:absolute;top:398px;left:196px;white-space:nowrap" class="ft012">Rights</p>
            <p style="position:absolute;top:398px;left:230px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:282px;white-space:nowrap" class="ft012">3</p>
            <p style="position:absolute;top:391px;left:289px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:391px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY_12}</p>
            <p style="position:absolute;top:391px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:385px;white-space:nowrap" class="ft012">${student.__EMPTY_13}</p>
            <p style="position:absolute;top:391px;left:392px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:415px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:391px;left:421px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:391px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:391px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:391px;left:492px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:391px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_14}</p>
            <p style="position:absolute;top:391px;left:554px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:587px;white-space:nowrap" class="ft012">${student.__EMPTY_15}</p>
            <p style="position:absolute;top:391px;left:594px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_16}</p>
            <p style="position:absolute;top:391px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_16}</p>
            <p style="position:absolute;top:391px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:718px;white-space:nowrap" class="ft012">${student.__EMPTY_16}</p>
            <p style="position:absolute;top:391px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:757px;white-space:nowrap" class="ft012">${student.__EMPTY_17}</p>
            <p style="position:absolute;top:391px;left:771px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_16)}</p>
            <p style="position:absolute;top:391px;left:816px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:391px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_16), student.__EMPTY_14,student.__EMPTY_15)}</p>
            <p style="position:absolute;top:391px;left:870px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:86px;white-space:nowrap" class="ft012">4</p>
            <p style="position:absolute;top:421px;left:93px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:104px;white-space:nowrap" class="ft012">BTBSC404/&#160;</p>
            <p style="position:absolute;top:438px;left:111px;white-space:nowrap" class="ft012">BTBS404</p>
            <p style="position:absolute;top:438px;left:158px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:172px;white-space:nowrap" class="ft012">
                Probability&#160;and&#160;</p>
            <p style="position:absolute;top:439px;left:188px;white-space:nowrap" class="ft012">Statistics</p>
            <p style="position:absolute;top:439px;left:237px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:282px;white-space:nowrap" class="ft012">3</p>
            <p style="position:absolute;top:421px;left:289px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:421px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY_18}</p>
            <p style="position:absolute;top:421px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:385px;white-space:nowrap" class="ft012">${student.__EMPTY_19}</p>
            <p style="position:absolute;top:421px;left:392px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:415px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:421px;left:421px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:421px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:421px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:421px;left:492px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:421px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_20}</p>
            <p style="position:absolute;top:421px;left:554px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:587px;white-space:nowrap" class="ft012">${student.__EMPTY_21}
</p>
            <p style="position:absolute;top:421px;left:594px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_22}</p>
            <p style="position:absolute;top:421px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_22}</p>
            <p style="position:absolute;top:421px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:718px;white-space:nowrap" class="ft012">${student.__EMPTY_22}</p>
            <p style="position:absolute;top:421px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:757px;white-space:nowrap" class="ft012">${student.__EMPTY_23}</p>
            <p style="position:absolute;top:421px;left:770px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_22)}</p>
            <p style="position:absolute;top:421px;left:811px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:421px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_22), student.__EMPTY_20,student.__EMPTY_21)}</p>
            <p style="position:absolute;top:421px;left:870px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:87px;white-space:nowrap" class="ft012">5</p>
            <p style="position:absolute;top:490px;left:94px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:112px;white-space:nowrap" class="ft012">BTES405</p>
            <p style="position:absolute;top:490px;left:159px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:481px;left:179px;white-space:nowrap" class="ft012">Digital&#160;Logic&#160;
            </p>
            <p style="position:absolute;top:498px;left:188px;white-space:nowrap" class="ft012">Design&#160;&amp;&#160;
            </p>
            <p style="position:absolute;top:515px;left:178px;white-space:nowrap" class="ft012">Microprocess&#160;</p>
            <p style="position:absolute;top:532px;left:204px;white-space:nowrap" class="ft012">ors</p>
            <p style="position:absolute;top:532px;left:221px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:282px;white-space:nowrap" class="ft012">4</p>
            <p style="position:absolute;top:490px;left:289px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:490px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY_24}</p>
            <p style="position:absolute;top:490px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:385px;white-space:nowrap" class="ft012">${student.__EMPTY_25}</p>
            <p style="position:absolute;top:490px;left:392px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:414px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:490px;left:421px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:490px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:490px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:490px;left:492px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:490px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_26}</p>
            <p style="position:absolute;top:490px;left:554px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:587px;white-space:nowrap" class="ft012">${student.__EMPTY_27}
</p>
            <p style="position:absolute;top:490px;left:594px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_28}</p>
            <p style="position:absolute;top:490px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_28}</p>
            <p style="position:absolute;top:490px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:717px;white-space:nowrap" class="ft012">${student.__EMPTY_28}</p>
            <p style="position:absolute;top:490px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:757px;white-space:nowrap" class="ft012">${student.__EMPTY_29}</p>
            <p style="position:absolute;top:490px;left:770px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_28)}</p>
            <p style="position:absolute;top:490px;left:815px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:490px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_28), student.__EMPTY_26,student.__EMPTY_27)}</p>
            <p style="position:absolute;top:490px;left:870px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:86px;white-space:nowrap" class="ft012">6</p>
            <p style="position:absolute;top:561px;left:93px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:107px;white-space:nowrap" class="ft012">BTCOL406&#160;</p>
            <p style="position:absolute;top:578px;left:133px;white-space:nowrap" class="ft012">L</p>
            <p style="position:absolute;top:578px;left:139px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:551px;left:185px;white-space:nowrap" class="ft012">Operating&#160;</p>
            <p style="position:absolute;top:568px;left:184px;white-space:nowrap" class="ft012">Systems&#160;&amp;&#160;
            </p>
            <p style="position:absolute;top:586px;left:193px;white-space:nowrap" class="ft012">Python&#160;</p>
            <p style="position:absolute;top:603px;left:175px;white-space:nowrap" class="ft012">Programming&#160;</p>
            <p style="position:absolute;top:620px;left:202px;white-space:nowrap" class="ft012">Lab</p>
            <p style="position:absolute;top:620px;left:221px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:282px;white-space:nowrap" class="ft012">3</p>
            <p style="position:absolute;top:561px;left:289px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:561px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY_30}</p>
            <p style="position:absolute;top:561px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:385px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:561px;left:392px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:414px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:561px;left:421px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:561px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:561px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:561px;left:491px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:561px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_31}</p>
            <p style="position:absolute;top:561px;left:554px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:587px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:561px;left:594px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_32}</p>
            <p style="position:absolute;top:561px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_32}</p>
            <p style="position:absolute;top:561px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:718px;white-space:nowrap" class="ft012">${student.__EMPTY_32}</p>
            <p style="position:absolute;top:561px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:756px;white-space:nowrap" class="ft012">${student.__EMPTY_33}</p>
            <p style="position:absolute;top:561px;left:772px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_32)}</p>
            <p style="position:absolute;top:561px;left:811px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:561px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_32), student.__EMPTY_31)}</p>
            <p style="position:absolute;top:561px;left:870px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:87px;white-space:nowrap" class="ft012">7</p>
            <p style="position:absolute;top:649px;left:94px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:106px;white-space:nowrap" class="ft012">BTCOS407</p>
            <p style="position:absolute;top:649px;left:164px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:639px;left:185px;white-space:nowrap" class="ft012">Seminar-II</p>
            <p style="position:absolute;top:639px;left:242px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:282px;white-space:nowrap" class="ft012">2</p>
            <p style="position:absolute;top:649px;left:289px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:321px;white-space:nowrap" class="ft012">100</p>
            <p style="position:absolute;top:649px;left:343px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:358px;white-space:nowrap" class="ft012">${student.__EMPTY_34}</p>
            <p style="position:absolute;top:649px;left:365px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:385px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:649px;left:393px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:414px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:649px;left:421px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:437px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:649px;left:444px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:457px;white-space:nowrap" class="ft012">0</p>
            <p style="position:absolute;top:649px;left:464px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:485px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:649px;left:491px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:516px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:649px;left:523px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:546px;white-space:nowrap" class="ft012">${student.__EMPTY_35}</p>
            <p style="position:absolute;top:649px;left:554px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:587px;white-space:nowrap" class="ft012">-</p>
            <p style="position:absolute;top:649px;left:594px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:633px;white-space:nowrap" class="ft012">${student.__EMPTY_36}</p>
            <p style="position:absolute;top:649px;left:640px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:675px;white-space:nowrap" class="ft012">${student.__EMPTY_36}</p>
            <p style="position:absolute;top:649px;left:682px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:718px;white-space:nowrap" class="ft012">${student.__EMPTY_36}</p>
            <p style="position:absolute;top:649px;left:725px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:757px;white-space:nowrap" class="ft012">${student.__EMPTY_37}</p>
            <p style="position:absolute;top:649px;left:771px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:799px;white-space:nowrap" class="ft012">${calculateGradePoint(student.__EMPTY_36)}</p>
            <p style="position:absolute;top:649px;left:816px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:649px;left:846px;white-space:nowrap" class="ft012">${checkPassOrFail(calculateGradePoint(student.__EMPTY_36), student.__EMPTY_35)}</p>
            <p style="position:absolute;top:649px;left:870px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:677px;left:163px;white-space:nowrap" class="ft010">
                <b>CURRENT&#160;SEMESTER&#160;PERFORMANCE</b></p>
            <p style="position:absolute;top:677px;left:392px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:677px;left:600px;white-space:nowrap" class="ft010">
                <b>CUMULATIVE&#160;&#160;PERFORMANCE</b></p>
            <p style="position:absolute;top:677px;left:776px;white-space:nowrap" class="ft011"><b>&#160;</b></p>
            <p style="position:absolute;top:710px;left:108px;white-space:nowrap" class="ft012">CREDITS&#160;</p>
            <p style="position:absolute;top:728px;left:93px;white-space:nowrap" class="ft012">COMPLETED</p>
            <p style="position:absolute;top:728px;left:158px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:700px;left:190px;white-space:nowrap" class="ft012">CREDITS&#160;REGISTERED
            </p>
            <p style="position:absolute;top:700px;left:305px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:700px;left:321px;white-space:nowrap" class="ft012">GRADE&#160;POINTS</p>
            <p style="position:absolute;top:700px;left:401px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:700px;left:432px;white-space:nowrap" class="ft012">SGPA</p>
            <p style="position:absolute;top:700px;left:460px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:701px;left:485px;white-space:nowrap" class="ft012">TOTAL&#160;</p>
            <p style="position:absolute;top:718px;left:480px;white-space:nowrap" class="ft012">CREDITS&#160;</p>
            <p style="position:absolute;top:735px;left:475px;white-space:nowrap" class="ft012">COMPLETE</p>
            <p style="position:absolute;top:753px;left:499px;white-space:nowrap" class="ft012">D</p>
            <p style="position:absolute;top:753px;left:507px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:710px;left:557px;white-space:nowrap" class="ft012">TOTAL&#160;CREDITS&#160;
            </p>
            <p style="position:absolute;top:728px;left:572px;white-space:nowrap" class="ft012">REGISTERED</p>
            <p style="position:absolute;top:728px;left:638px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:710px;left:688px;white-space:nowrap" class="ft012">
                TOTAL&#160;&#160;GRADE&#160;P&#160;</p>
            <p style="position:absolute;top:728px;left:724px;white-space:nowrap" class="ft012">OINTS</p>
            <p style="position:absolute;top:728px;left:756px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:700px;left:793px;white-space:nowrap" class="ft012">&#160; &#160; &#160;
                &#160; &#160;CGPA</p>
            <p style="position:absolute;top:700px;left:846px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:770px;left:121px;white-space:nowrap" class="ft012">${checkInputs(student.__EMPTY_5, student.__EMPTY_11,student.__EMPTY_17,student.__EMPTY_23,student.__EMPTY_29,student.__EMPTY_33,student.__EMPTY_37)}</p>
            <p style="position:absolute;top:770px;left:128px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:770px;left:238px;white-space:nowrap" class="ft012">${checkInputs(student.__EMPTY_5, student.__EMPTY_11,student.__EMPTY_17,student.__EMPTY_23,student.__EMPTY_29,student.__EMPTY_33,student.__EMPTY_37)}</p>
            <p style="position:absolute;top:770px;left:246px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:770px;left:356px;white-space:nowrap" class="ft012">${student.Total_Credits}</p>
            <p style="position:absolute;top:770px;left:363px;white-space:nowrap" class="ft09">&#160;</p>
            <p style="position:absolute;top:770px;left:433px;white-space:nowrap" class="ft09">${Sgpa(student.SGPA)}&#160;</p>
            <p style="position:absolute;top:770px;left:499px;white-space:nowrap" class="ft09">-&#160;</p>
            <p style="position:absolute;top:770px;left:592px;white-space:nowrap" class="ft09">-&#160;</p>
            <p style="position:absolute;top:770px;left:718px;white-space:nowrap" class="ft09">-&#160;</p>
            <p style="position:absolute;top:770px;left:836px;white-space:nowrap" class="ft09">-&#160;</p>
            <p style="position:absolute;top:792px;left:78px;white-space:nowrap" class="ft013">&#160;</p>
            <p style="position:absolute;top:813px;left:75px;white-space:nowrap" class="ft014">&#160;</p>
        </div>`
    } else {
        resultElement.textContent = 'Student not found';
    }
}

function calculateGradePoint(percentage) {
    let gradePoint = '';

    if (percentage >= 91 && percentage <= 100) {
        gradePoint = '10.0';
    } else if (percentage >= 86 && percentage <= 90) {
        gradePoint = '9.0';
    } else if (percentage >= 81 && percentage <= 85) {
        gradePoint = '8.5';
    } else if (percentage >= 76 && percentage <= 80) {
        gradePoint = '8.0';
    } else if (percentage >= 71 && percentage <= 75) {
        gradePoint = '7.5';
    } else if (percentage >= 66 && percentage <= 70) {
        gradePoint = '7.0';
    } else if (percentage >= 61 && percentage <= 65) {
        gradePoint = '6.5';
    } else if (percentage >= 56 && percentage <= 60) {
        gradePoint = '6.0';
    } else if (percentage >= 51 && percentage <= 55) {
        gradePoint = '5.5';
    } else if (percentage >= 40 && percentage <= 50) {
        gradePoint = '5.0';
    } else if (percentage < 40) {
        gradePoint = '-';
    }

    return gradePoint;
}

function checkPassOrFail(percentage, lastMarks, grace) {
    if (percentage < 4.0 || lastMarks+grace < 20) {
        return 'Fail';
    } else {
        return 'Pass';
    }
}

function checkInputs(a, b, c, d, e, f, g) {
    if (a === 'FF' || b === 'FF' || c === 'FF' || d === 'FF' || e === 'FF' || f === 'FF' || g === 'FF') {
        return '-';
    }
    return '23';
}

function Sgpa(SGPA){
    if(SGPA == undefined){
        return '-';
    }else{
        return SGPA;
    }
}

function downloadPDF() {
    const element = document.getElementById('Marksheet_Box');
    const screenWidth = window.innerWidth + 50;
    const screenHeight = window.innerHeight - 800;
    // Set options to generate a responsive PDF
    var opt = {
        margin:       0, 
        filename:     'image.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },  // Improve quality
        jsPDF:        { unit: 'px', format: [screenWidth, screenHeight] }
    };
    // Generate PDF
    html2pdf().from(element).set(opt).save();
}



// function downloadPDF() {
//         var element = document.getElementById('Marksheet_Box');
            
//           // Set PDF options to match the image size
//           var opt = {
//             margin:       0, 
//             filename:     'image.pdf',
//             image:        { type: 'jpeg', quality: 0.98 },
//             html2canvas:  { scale: 2 },
//             jsPDF:        { unit: 'px', format: [element.offsetWidth, element.offsetHeight] }
//         };
//         html2pdf().from(element).set(opt).save();
// }

// function pcFunction() {
//     var element = document.getElementById('Marksheet_Box');
            
//     // Set PDF options to match the image size
//     var opt = {
//       margin:       0, 
//       filename:     'image.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'px', format: [element.offsetWidth, element.offsetHeight] }
//   };
//   html2pdf().from(element).set(opt).save();
// }

// function mobileFunction() {
//     const element = document.getElementById('Marksheet_Box');
//     const screenWidth = window.innerWidth + 50;
//     const screenHeight = window.innerHeight;
//     // Set options to generate a responsive PDF
//     var opt = {
//         margin:       0, 
//         filename:     'image.pdf',
//         image:        { type: 'jpeg', quality: 0.98 },
//         html2canvas:  { scale: 2 },  // Improve quality
//         jsPDF:        { unit: 'px', format: [screenWidth, screenHeight] }
//     };
//     // Generate PDF
//     html2pdf().from(element).set(opt).save();
// }

// Call the function to load the data when the page loads
window.onload = fetchExcelFile;

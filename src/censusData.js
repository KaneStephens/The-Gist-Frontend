//"Country or Area","Year","Language","Source Year","Value","Value Footnotes"


let data = [["Australia", "2016", "Total", "2017", "23401892", "1"],
["Canada", "2016", "Total", "2017", "34767255", "2"],
["China, Hong Kong SAR", "2016", "Total", "2017", "7048969", "3,4,5"],
["China, Macao SAR", "2016", "Total", "2017", "632857", "6,7"],
["Georgia", "2014", "Total", "2016", "3713804", ""],
["Republic of Moldova", "2014", "Total", "2016", "2804801", "8,9"],
["New Zealand", "2013", "Total", "2016", "4242048", "1"],
["Bolivia (Plurinational State of)", "2012", "Total", "2014", "10059856", ""],
["Albania", "2011", "Total", "2013", "2800138", ""],
["Armenia", "2011", "Total", "2013", "3018854", ""],
["Australia", "2011", "Total", "2012", "21507719", "1,10"],
["Botswana", "2011", "Total", "2015", "2024904", ""],
["Bulgaria", "2011", "Total", "2012", "7364570", ""],
["Canada", "2011", "Total", "2013", "32852325", ""],
["China, Hong Kong SAR", "2011", "Total", "2013", "6808433", "3,4,5"],
["China, Macao SAR", "2011", "Total", "2012", "539131", "7"],
["Cook Islands", "2011", "Total", "2014", "14974", "11"],
["Croatia", "2011", "Total", "2014", "4284889", ""],
["Cyprus", "2011", "Total", "2013", "840407", "12"],
["Czechia", "2011", "Total", "2012", "10436560", ""],
["Estonia", "2011", "Total", "2013", "1294455", ""],
["Hungary", "2011", "Total", "2013", "9937628", "13"],
["Ireland", "2011", "Total", "2012", "4588252", ""],
["Latvia", "2011", "Total", "2013", "2070371", "14"],
["Lithuania", "2011", "Total", "2014", "3026184", "15"],
["Malta", "2011", "Total", "2014", "377952", "16"],
["Mauritius", "2011", "Total", "2012", "1236817", "17"],
["Montenegro", "2011", "Total", "2013", "620029", ""],
["Namibia", "2011", "Total", "2014", "2064489", ""],
["Nepal", "2011", "Total", "2013", "26494504", ""],
["Poland", "2011", "Total", "2013", "38044565", ""],
["Romania", "2011", "Total", "2014", "20121641", ""],
["Serbia", "2011", "Total", "2013", "7186862", "18"],
["Slovakia", "2011", "Total", "2013", "5397036", ""],
["South Africa", "2011", "Total", "2013", "50961443", ""],
["Switzerland", "2011", "Total", "2012", "7684834", "19"],
["Tokelau", "2011", "Total", "2013", "1143", "9,20,21"],
["United Kingdom of Great Britain and Northern Ireland", "2011", "Total", "2013", "63182178", "22"],
["Cayman Islands", "2010", "Total", "2012", "55036", "23"],
["Ecuador", "2010", "Total", "2012", "14585458", "24"],
["Finland", "2010", "Total", "2011", "5375276", ""],
["Ghana", "2010", "Total", "2013", "23823594", "25"],
["Guam", "2010", "Total", "2013", "145069", "26"],
["Indonesia", "2010", "Total", "2015", "214063055", "26,27"],
["Liechtenstein", "2010", "Total", "2013", "36149", ""],
["Mexico", "2010", "Total", "2011", "106178671", "28"],
["Puerto Rico", "2010", "Total", "2015", "3498886", "26,29"],
["Russian Federation", "2010", "Total", "2012", "142856536", "30"],
["Singapore", "2010", "Total", "2011", "3105748", "31,32,33"],
["Tajikistan", "2010", "Total", "2012", "7564502", ""],
["Thailand", "2010", "Total", "2013", "65981659", ""],
["Azerbaijan", "2009", "Total", "2011", "8922447", ""],
["Belarus", "2009", "Total", "2011", "9503807", "34"],
["Guinea-Bissau", "2009", "Total", "2015", "1435032", "21,35"],
["Mali", "2009", "Total", "2014", "11109312", "36"],
["Algeria", "2008", "Total", "2015", "30650174.9590606", "26,37"],
["Cambodia", "2008", "Total", "2009", "13395682", ""],
["Malawi", "2008", "Total", "2009", "13029498", ""],
["Ethiopia", "2007", "Total", "2010", "73750932", ""],
["French Polynesia", "2007", "Total", "2012", "192176", "38"],
["Mozambique", "2007", "Total", "2009", "20252223", ""],
["Peru", "2007", "Total", "2013", "25810331", "39"],
["Australia", "2006", "Total", "2011", "19855287", "1,10"],
["Burkina Faso", "2006", "Total", "2009", "14017262", ""],
["Canada", "2006", "Total", "2017", "31241030", "34,40,41"],
["China, Hong Kong SAR", "2006", "Total", "2011", "6640344", "3,4,5"],
["Falkland Islands (Malvinas)", "2006", "Total", "2010", "2955", ""],
["Ireland", "2006", "Total", "2009", "4239848", ""],
["New Zealand", "2006", "Total", "2009", "4027947", "1,30"],
["Tonga", "2006", "Total", "2009", "85575", "42"],
["Malta", "2005", "Total", "2009", "362376", "14,16"],
["Mexico", "2005", "Total", "2008", "93077145", "26"],
["Nicaragua", "2005", "Total", "2010", "5142098", ""],
["Palau", "2005", "Total", "2008", "18544", "43"],
["Morocco", "2004", "Total", "2009", "23700447", "16"],
["Republic of Moldova", "2004", "Total", "2009", "3383332", "44"],
["Timor-Leste", "2004", "Total", "2011", "741530", "45"],
["Montenegro", "2003", "Total", "2009", "620145", ""],
["Georgia", "2002", "Total", "2009", "4371535", ""],
["North Macedonia", "2002", "Total", "2003", "2022547", ""],
["Poland", "2002", "Total", "2003", "38230080", "14"],
["Romania", "2002", "Total", "2003", "21680974", "34"],
["Rwanda", "2002", "Total", "2011", "7963809", "46"],
["Serbia", "2002", "Total", "2003", "7498001", "18"],
["Seychelles", "2002", "Total", "2005", "81755", ""],
["Slovenia", "2002", "Total", "2003", "1964036", ""],
["Anguilla", "2001", "Total", "2003", "11430", ""],
["Armenia", "2001", "Total", "2003", "3213011", "34,47"],
["Australia", "2001", "Total", "2009", "18769256", ""],
["Austria", "2001", "Total", "2003", "8032926", ""],
["Bolivia (Plurinational State of)", "2001", "Total", "2007", "8274325", ""],
["Botswana", "2001", "Total", "2003", "1601885", "48"],
["Canada", "2001", "Total", "2009", "27129865", "34,40"],
["China, Hong Kong SAR", "2001", "Total", "2002", "6417739", "4,5"],
["China, Macao SAR", "2001", "Total", "2002", "424203", "7"],
["Croatia", "2001", "Total", "2005", "4437460", ""],
["Cyprus", "2001", "Total", "2002", "689565", "12,49"],
["Czechia", "2001", "Total", "2003", "10230060", ""],
["India", "2001", "Total", "2007", "1028610328", "50,51"],
["Lithuania", "2001", "Total", "2003", "3483972", "34"],
["Namibia", "2001", "Total", "2010", "1219756", ""],
["Nepal", "2001", "Total", "2002", "22736934", ""],
["New Zealand", "2001", "Total", "2009", "3563796", "1,30"],
["Slovakia", "2001", "Total", "2009", "5379455", ""],
["South Africa", "2001", "Total", "2005", "44819778", ""],
["Sri Lanka", "2001", "Total", "2009", "14006337", "16,52,53"],
["Ukraine", "2001", "Total", "2003", "48240902", ""],
["Åland Islands", "2000", "Total", "2009", "25776", "54"],
["American Samoa", "2000", "Total", "2001", "49471", "26,29"],
["Aruba", "2000", "Total", "2009", "86408", "26,41"],
["Belize", "2000", "Total", "2005", "205123", "14"],
["Estonia", "2000", "Total", "2002", "1370052", ""],
["Finland", "2000", "Total", "2001", "5181115", "34,55"],
["Ghana", "2000", "Total", "2005", "17436592", ""],
["Guam", "2000", "Total", "2002", "138020", "26,29"],
["Latvia", "2000", "Total", "2003", "2377383", "34"],
["Mauritius", "2000", "Total", "2003", "1178848", "14,17"],
["Micronesia (Federated States of)", "2000", "Total", "2005", "92225", "26"],
["Northern Mariana Islands", "2000", "Total", "2005", "63429", "26"],
["Palau", "2000", "Total", "2005", "17821", "26"],
["Philippines", "2000", "Total", "2002", "15278808", "56,57"],
["Puerto Rico", "2000", "Total", "2009", "3515228", "26,29"],
["Switzerland", "2000", "Total", "2003", "7288010", ""],
["Tajikistan", "2000", "Total", "2007", "6039917", ""],
["Thailand", "2000", "Total", "2009", "56281538", "26,58"],
["United States of America", "2000", "Total", "2002", "262375152", "59"],
["Azerbaijan", "1999", "Total", "2001", "7873826", "34"],
["Belarus", "1999", "Total", "2009", "10045237", ""],
["Cayman Islands", "1999", "Total", "2007", "39020", ""],
["Kyrgyzstan", "1999", "Total", "2007", "4657496", "60"],
["Marshall Islands", "1999", "Total", "2001", "43188", "26,30"],
["Cambodia", "1998", "Total", "2009", "11437656", ""],
["Malawi", "1998", "Total", "2000", "9933868", ""],
["Mali", "1998", "Total", "2007", "7620672", "14"],
["Mozambique", "1997", "Total", "2001", "12536778", "26"],
["Australia", "1996", "Total", "2003", "16624517", "26"],
["Canada", "1996", "Total", "1997", "28528125", ""],
["New Zealand", "1996", "Total", "2005", "3452937", "30,61"],
["South Africa", "1996", "Total", "2005", "40583570", "62"],
["Tonga", "1996", "Total", "1998", "80198", "42"],
["Palau", "1995", "Total", "2005", "15463", ""],
["Philippines", "1995", "Total", "2005", "68431213", ""]]



let englishData = [["Australia", "2016", "English", "2017", "17020417", "1"],
["Canada", "2016", "English", "2017", "25897805", "2"],
["China, Hong Kong SAR", "2016", "English", "2017", "300417", "3,4,5"],
["China, Macao SAR", "2016", "English", "2017", "17639", "6,7"],
["New Zealand", "2013", "English", "2016", "3819972", "1"],
["Australia", "2011", "English", "2012", "16509289", "1,10"],
["Botswana", "2011", "English", "2015", "52921", ""],
["Canada", "2011", "English", "2013", "22254905", ""],
["China, Hong Kong SAR", "2011", "English", "2013", "238288", "3,4,5"],
["China, Macao SAR", "2011", "English", "2012", "12155", "7"],
["Cook Islands", "2011", "English", "2014", "12933", "11"],
["Cyprus", "2011", "English", "2013", "34814", "12"],
["Czechia", "2011", "English", "2012", "7202", ""],
["Estonia", "2011", "English", "2013", "878", ""],
["Lithuania", "2011", "English", "2014", "293", "15"],
["Malta", "2011", "English", "2014", "310279", "16"],
["Mauritius", "2011", "English", "2012", "5573", "17"],
["Namibia", "2011", "English", "2014", "50225", ""],
["Nepal", "2011", "English", "2013", "2032", ""],
["Poland", "2011", "English", "2013", "80882", ""],
["South Africa", "2011", "English", "2013", "4892623", ""],
["Switzerland", "2011", "English", "2012", "286928", "19"],
["Tokelau", "2011", "English", "2013", "673", "9,20,21"],
["United Kingdom of Great Britain and Northern Ireland", "2011", "English", "2013", "58249154", "22"],
["Bahamas", "2010", "English", "2013", "351461", ""],
["Belize", "2010", "English", "2014", "183903", "65,66"],
["Cayman Islands", "2010", "English", "2012", "50018.52494", "23"],
["Finland", "2010", "English", "2011", "12855", ""],
["Guam", "2010", "English", "2013", "63238", "26"],
["Liechtenstein", "2010", "English", "2013", "59", ""],
["Puerto Rico", "2010", "English", "2015", "158887", "26,29"],
["Russian Federation", "2010", "English", "2012", "7574303", "30"],
["Singapore", "2010", "English", "2011", "329194", "31,32,33"],
["Thailand", "2010", "English", "2013", "323779", ""],
["Guinea-Bissau", "2009", "English", "2015", "42194", "21,35"],
["Algeria", "2008", "English", "2015", "7262.89990489839", "26,37"],
["Cambodia", "2008", "English", "2009", "2360", ""],
["Ethiopia", "2007", "English", "2010", "1867", ""],
["Australia", "2006", "English", "2011", "15581334", "1,10"],
["Canada", "2006", "English", "2017", "17882780", "34,40,41"],
["China, Hong Kong SAR", "2006", "English", "2011", "187281", "3,4,5"],
["Falkland Islands (Malvinas)", "2006", "English", "2009", "2629", "63,64"],
["New Zealand", "2006", "English", "2009", "3673626", "1,30"],
["Tokelau", "2006", "English", "2008", "622", "30"],
["Tonga", "2006", "English", "2009", "1020", "42"],
["Malta", "2005", "English", "2009", "21636", "14,16"],
["Palau", "2005", "English", "2008", "2871", "43"],
["Timor-Leste", "2004", "English", "2011", "808", "45"],
["Poland", "2002", "English", "2003", "89874", "14"],
["Rwanda", "2002", "English", "2011", "4930", "46"],
["Seychelles", "2002", "English", "2005", "3760", ""],
["Anguilla", "2001", "English", "2003", "11329", ""],
["Australia", "2001", "English", "2009", "15013965", ""],
["Austria", "2001", "English", "2003", "58582", ""],
["Botswana", "2001", "English", "2003", "34433", "48"],
["Canada", "2001", "English", "2009", "17352315", "34,40"],
["China, Hong Kong SAR", "2001", "English", "2002", "203598", "4,5"],
["China, Macao SAR", "2001", "English", "2002", "2792", "7"],
["Cyprus", "2001", "English", "2002", "16086", "12,49"],
["Czechia", "2001", "English", "2003", "3791", ""],
["Lithuania", "2001", "English", "2003", "281", "34"],
["Namibia", "2001", "English", "2010", "129359", ""],
["Nepal", "2001", "English", "2002", "1037", ""],
["New Zealand", "2001", "English", "2009", "3425304", "1,30"],
["South Africa", "2001", "English", "2005", "3673203", ""],
["Sri Lanka", "2001", "English", "2009", "13012813", "16,52,53"],
["American Samoa", "2000", "English", "2001", "1440", "26,29"],
["Aruba", "2000", "English", "2009", "7001", "26,41"],
["Belize", "2000", "English", "2005", "7946", "14"],
["Finland", "2000", "English", "2001", "6919", "34,55"],
["Guam", "2000", "English", "2002", "52831", "26,29"],
["Latvia", "2000", "English", "2003", "570", "34"],
["Mauritius", "2000", "English", "2003", "3512", "14,17"],
["Micronesia (Federated States of)", "2000", "English", "2005", "1322", "26"],
["Northern Mariana Islands", "2000", "English", "2005", "6819", "26"],
["Palau", "2000", "English", "2005", "1675", "26"],
["Philippines", "2000", "English", "2002", "6166", "56,57"],
["Puerto Rico", "2000", "English", "2009", "506661", "26,29"],
["Switzerland", "2000", "English", "2003", "73425", ""],
["Thailand", "2000", "English", "2009", "48202", "26,58"],
["United States of America", "2000", "English", "2002", "215423557", "59"],
["Cayman Islands", "1999", "English", "2007", "37078", ""],
["Marshall Islands", "1999", "English", "2001", "23247", "26,30"],
["Cambodia", "1998", "English", "2009", "1427", ""],
["Malawi", "1998", "English", "2000", "17479", ""],
["Australia", "1996", "English", "2003", "13498094", "26"],
["Canada", "1996", "English", "1997", "16890615", ""],
["New Zealand", "1996", "English", "2005", "3290454", "30,61"],
["South Africa", "1996", "English", "2005", "3457467", "62"],
["Tonga", "1996", "English", "1998", "474", "42"],
["Palau", "1995", "English", "2005", "3196", ""],
["Philippines", "1995", "English", "2005", "28701", ""],
["Mauritius", "2011", "English and French", "2012", "322", "17"],
["Rwanda", "2002", "English and Other", "2011", "544", "46"],
["Tonga", "2006", "English and Tongan", "2009", "74472", "42"],
["Tonga", "1996", "English and Tongan", "1998", "58411", "42"]]

//"Country or Area","Year","Language","Source Year","Value","Value Footnotes"

const finalData = {}

for (arr of data) {
  // check if finalData already has a key for this country

  const country = arr[0]
  const yearCollected = arr[1]
  const total = arr[2]
  const yearPublished = arr[3]
  const participants = arr[4]
  const junk = arr[5]

  if (Object.keys(finalData).includes(country)) {
    // check if index of mapping is newer
    if (finalData[country].year < yearPublished) {
      finalData[country] = {
        "year": yearPublished,
        participants
      }
    }

  } else { // new country!
    finalData[country] = {
      "year": yearPublished,
      participants
    }
  }
}



for (arr of englishData) {
  const country = arr[0]
  const yearCollected = arr[1]
  const language = arr[2]
  const yearPublished = arr[3]
  const speakers = arr[4]
  const junk = arr[5]

  if (Object.keys(finalData).includes(country) && finalData[country].year == yearPublished ) {
    finalData[country][language] = speakers
  }
}
 
console.log(finalData)

var fs = require('fs');
fs.writeFile("englishData.json", JSON.stringify(finalData), function (err) {
  if (err) {
    console.log(err);
  }
});
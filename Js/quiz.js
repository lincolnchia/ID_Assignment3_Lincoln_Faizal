var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function HideQuiz() {
    var x = document.getElementById("quiz-lottie");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
}
  

$(function () {
    $(".container").mapael({
        map: {
            name: "world_countries",
            zoom: {
                enabled:true
            },
            defaultArea: {
                attrs: {
                    fill:"#76689a",
                    stroke: "#fff",
                    "stroke-width": 1,
                },
                attrsHover: {
                    fill:"#d8a0a6"
                },
                eventHandlers: {
                    click: function(e, id, mapElem, textElem) { 
                        makingquestion1(id);
                    }
                }
            },
            
        },
        
        areas: {
            "AF": {
                "value": "35320445",
                "attrs": {
                    "href": "#"
                },
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span>"
                }
            },
            "ZA": {
                "value": "50586757",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">South Africa<\/span>"
                }
            },
            "AL": {
                "value": "3215988",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Albania<\/span>"
                }
            },
            "DZ": {
                "value": "35980193",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Algeria<\/span>"
                }
            },
            "DE": {
                "value": "81726000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Germany<\/span>"
                }
            },
            "AD": {
                "value": "86165",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Andorra<\/span>"
                }
            },
            "AO": {
                "value": "19618432",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Angola<\/span>"
                }
            },
            "AG": {
                "value": "89612",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span>"
                }
            },
            "SA": {
                "value": "28082541",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span>"
                }
            },
            "AR": {
                "value": "40764561",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Argentina<\/span>"
                }
            },
            "AM": {
                "value": "3100236",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Armenia<\/span>"
                }
            },
            "AU": {
                "value": "22620600",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Australia<\/span>"
                }
            },
            "AT": {
                "value": "8419000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Austria<\/span>"
                }
            },
            "AZ": {
                "value": "9168000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span>"
                }
            },
            "BS": {
                "value": "347176",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bahamas<\/span>"
                }
            },
            "BH": {
                "value": "1323535",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bahrain<\/span>"
                }
            },
            "BD": {
                "value": "150493658",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span>"
                }
            },
            "BB": {
                "value": "273925",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Barbados<\/span>"
                }
            },
            "BE": {
                "value": "11008000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Belgium<\/span>"
                }
            },
            "BZ": {
                "value": "356600",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Belize<\/span>"
                }
            },
            "BJ": {
                "value": "9099922",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Benin<\/span>"
                }
            },
            "BT": {
                "value": "738267",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bhutan<\/span>"
                }
            },
            "BY": {
                "value": "9473000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Belarus<\/span>"
                }
            },
            "MM": {
                "value": "48336763",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Myanmar<\/span>"
                }
            },
            "BO": {
                "value": "10088108",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span>"
                }
            },
            "BA": {
                "value": "3752228",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span>"
                }
            },
            "BW": {
                "value": "2030738",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Botswana<\/span>"
                }
            },
            "BR": {
                "value": "196655014",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Brazil<\/span>"
                }
            },
            "BN": {
                "value": "405938",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span>"
                }
            },
            "BG": {
                "value": "7476000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span>"
                }
            },
            "BF": {
                "value": "16967845",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span>"
                }
            },
            "BI": {
                "value": "8575172",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Burundi<\/span>"
                }
            },
            "KH": {
                "value": "14305183",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cambodia<\/span>"
                }
            },
            "CM": {
                "value": "20030362",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cameroon<\/span>"
                }
            },
            "CA": {
                "value": "34482779",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Canada<\/span>"
                }
            },
            "CV": {
                "value": "500585",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span>"
                }
            },
            "CF": {
                "value": "4486837",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span>"
                }
            },
            "CL": {
                "value": "17269525",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Chile<\/span>"
                }
            },
            "CN": {
                "value": "1344130000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">China<\/span>"
                }
            },
            "CY": {
                "value": "1116564",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cyprus<\/span>"
                }
            },
            "CO": {
                "value": "46927125",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Colombia<\/span>"
                }
            },
            "KM": {
                "value": "753943",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Comoros<\/span>"
                }
            },
            "CG": {
                "value": "4139748",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Congo<\/span>"
                }
            },
            "CD": {
                "value": "67757577",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span>"
                }
            },
            "KP": {
                "value": "24451285",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span>"
                }
            },
            "KR": {
                "value": "49779000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span"
                }
            },
            "CR": {
                "value": "4726575",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Costa Rica<\/span>"
                }
            },
            "CI": {
                "value": "20152894",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span>"
                }
            },
            "HR": {
                "value": "4407000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Croatia<\/span>"
                }
            },
            "CU": {
                "value": "11253665",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Cuba<\/span>"
                }
            },
            "DK": {
                "value": "5574000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Denmark<\/span>"
                }
            },
            "DJ": {
                "value": "905564",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Djibouti<\/span>"
                }
            },
            "DM": {
                "value": "67675",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Dominica<\/span>"
                }
            },
            "EG": {
                "value": "82536770",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Egypt<\/span>"
                }
            },
            "AE": {
                "value": "7890924",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span>"
                }
            },
            "EC": {
                "value": "14666055",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ecuador<\/span>"
                }
            },
            "ER": {
                "value": "5415280",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Eritrea<\/span>"
                }
            },
            "ES": {
                "value": "46235000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Spain<\/span>"
                }
            },
            "EE": {
                "value": "1340000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Estonia<\/span>"
                }
            },
            "US": {
                "value": "311591917",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">United States<\/span>"
                }
            },
            "ET": {
                "value": "84734262",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ethiopia<\/span>"
                }
            },
            "FJ": {
                "value": "868406",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Fiji<\/span>"
                }
            },
            "FI": {
                "value": "5387000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Finland<\/span>"
                }
            },
            "FR": {
                "value": "65436552",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">France<\/span>"
                }
            },
            "GA": {
                "value": "1534262",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Gabon<\/span>"
                }
            },
            "GM": {
                "value": "1776103",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Gambia<\/span>"
                }
            },
            "GE": {
                "value": "4486000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Georgia<\/span>"
                }
            },
            "GH": {
                "value": "24965816",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ghana<\/span>"
                }
            },
            "GR": {
                "value": "11304000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Greece<\/span>"
                }
            },
            "GD": {
                "value": "104890",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Grenada<\/span>"
                }
            },
            "GT": {
                "value": "14757316",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guatemala<\/span>"
                }
            },
            "GN": {
                "value": "10221808",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guinea<\/span>"
                }
            },
            "GQ": {
                "value": "720213",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span>"
                }
            },
            "GW": {
                "value": "1547061",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span>"
                }
            },
            "GY": {
                "value": "756040",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Guyana<\/span>"
                }
            },
            "HT": {
                "value": "10123787",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Haiti<\/span>"
                }
            },
            "HN": {
                "value": "7754687",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Honduras<\/span>"
                }
            },
            "HU": {
                "value": "9971000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Hungary<\/span>"
                }
            },
            "JM": {
                "value": "2709300",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Jamaica<\/span>"
                }
            },
            "JP": {
                "value": "127817277",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Japan<\/span>"
                }
            },
            "MH": {
                "value": "54816",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span>"
                }
            },
            "PW": {
                "value": "20609",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Palau<\/span>"
                }
            },
            "SB": {
                "value": "552267",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span>"
                }
            },
            "IN": {
                "value": "1241491960",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">India<\/span>"
                }
            },
            "ID": {
                "value": "242325638",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Indonesia<\/span>"
                }
            },
            "JO": {
                "value": "6181000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Jordan<\/span>"
                }
            },
            "IR": {
                "value": "74798599",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span>"
                }
            },
            "IQ": {
                "value": "32961959",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Iraq<\/span>"
                }
            },
            "IE": {
                "value": "4487000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ireland<\/span>"
                }
            },
            "IS": {
                "value": "319000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Iceland<\/span>"
                }
            },
            "IL": {
                "value": "7765700",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Israel<\/span>"
                }
            },
            "IT": {
                "value": "60770000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Italy<\/span>"
                }
            },
            "KZ": {
                "value": "16558459",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span>"
                }
            },
            "KE": {
                "value": "41609728",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kenya<\/span>"
                }
            },
            "KG": {
                "value": "5507000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span>"
                }
            },
            "KI": {
                "value": "101093",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kiribati<\/span>"
                }
            },
            "KW": {
                "value": "2818042",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Kuwait<\/span>"
                }
            },
            "LA": {
                "value": "6288037",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span>"
                }
            },
            "LS": {
                "value": "2193843",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lesotho<\/span>"
                }
            },
            "LV": {
                "value": "2220000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Latvia<\/span>"
                }
            },
            "LB": {
                "value": "4259405",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lebanon<\/span>"
                }
            },
            "LR": {
                "value": "4128572",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Liberia<\/span>"
                }
            },
            "LY": {
                "value": "6422772",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Libya<\/span>"
                }
            },
            "LI": {
                "value": "36304",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span>"
                }
            },
            "LT": {
                "value": "3203000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Lithuania<\/span>"
                }
            },
            "LU": {
                "value": "517000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Luxembourg<\/span>"
                }
            },
            "MK": {
                "value": "2063893",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span>"
                }
            },
            "MG": {
                "value": "21315135",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Madagascar<\/span>"
                }
            },
            "MY": {
                "value": "28859154",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Malaysia<\/span>"
                }
            },
            "MW": {
                "value": "15380888",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Malawi<\/span>"
                }
            },
            "MV": {
                "value": "320081",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Maldives<\/span>"
                }
            },
            "ML": {
                "value": "15839538",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mali<\/span>"
                }
            },
            "MT": {
                "value": "419000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Malta<\/span>"
                }
            },
            "MA": {
                "value": "32272974",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Morocco<\/span>"
                }
            },
            "MU": {
                "value": "1286051",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mauritius<\/span>"
                }
            },
            "MR": {
                "value": "3541540",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mauritania<\/span>"
                }
            },
            "MX": {
                "value": "114793341",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mexico<\/span>"
                }
            },
            "FM": {
                "value": "111542",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span>"
                }
            },
            "MD": {
                "value": "3559000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span>"
                }
            },
            "MC": {
                "value": "35427",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Monaco<\/span>"
                }
            },
            "MN": {
                "value": "2800114",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mongolia<\/span>"
                }
            },
            "ME": {
                "value": "632261",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Montenegro<\/span>"
                }
            },
            "MZ": {
                "value": "23929708",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Mozambique<\/span>"
                }
            },
            "NA": {
                "value": "2324004",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Namibia<\/span>"
                }
            },
            "NP": {
                "value": "30485798",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Nepal<\/span>"
                }
            },
            "NI": {
                "value": "5869859",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Nicaragua<\/span>"
                }
            },
            "NE": {
                "value": "16068994",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Niger<\/span>"
                }
            },
            "NG": {
                "value": "162470737",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Nigeria<\/span>"
                }
            },
            "NO": {
                "value": "4952000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Norway<\/span>"
                }
            },
            "NZ": {
                "value": "4405200",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">New Zealand<\/span>"
                }
            },
            "OM": {
                "value": "2846145",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Oman<\/span>"
                }
            },
            "UG": {
                "value": "34509205",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>"
                }
            },
            "UZ": {
                "value": "29341200",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>"
                }
            },
            "PK": {
                "value": "176745364",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>"
                }
            },
            "PS": {
                "value": "4019433",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span>"
                }
            },
            "PA": {
                "value": "3571185",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>"
                }
            },
            "PG": {
                "value": "7013829",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span>"
                }
            },
            "PY": {
                "value": "6568290",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Paraguay<\/span>"
                }
            },
            "NL": {
                "value": "16696000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Netherlands<\/span>"
                }
            },
            "PE": {
                "value": "29399817",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Peru<\/span>"
                }
            },
            "PH": {
                "value": "94852030",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Philippines<\/span>"
                }
            },
            "PL": {
                "value": "38216000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Poland<\/span>"
                }
            },
            "PT": {
                "value": "10637000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Portugal<\/span>"
                }
            },
            "QA": {
                "value": "1870041",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Qatar<\/span>"
                }
            },
            "DO": {
                "value": "10056181",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span>"
                }
            },
            "RO": {
                "value": "21390000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Romania<\/span>"
                }
            },
            "GB": {
                "value": "62641000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span>"
                }
            },
            "RU": {
                "value": "141930000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Russian Federation<\/span>"
                }
            },
            "RW": {
                "value": "10942950",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Rwanda<\/span>"
                }
            },
            "KN": {
                "value": "53051",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span>"
                }
            },
            "SM": {
                "value": "31735",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">San Marino<\/span>"
                }
            },
            "VC": {
                "value": "109365",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span>"
                }
            },
            "LC": {
                "value": "176000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span>"
                }
            },
            "SV": {
                "value": "6227491",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">El Salvador<\/span>"
                }
            },
            "WS": {
                "value": "183874",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Samoa<\/span>"
                }
            },
            "ST": {
                "value": "168526",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span>"
                }
            },
            "SN": {
                "value": "12767556",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Senegal<\/span>"
                }
            },
            "RS": {
                "value": "7261000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Serbia<\/span>"
                }
            },
            "SC": {
                "value": "86000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Seychelles<\/span>"
                }
            },
            "SL": {
                "value": "5997486",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span>"
                }
            },
            "SG": {
                "value": "5183700",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Singapore<\/span>"
                }
            },
            "SK": {
                "value": "5440000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Slovakia<\/span>"
                }
            },
            "SI": {
                "value": "2052000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Slovenia<\/span>"
                }
            },
            "SO": {
                "value": "9556873",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Somalia<\/span>"
                }
            },
            "SD": {
                "value": "34318385",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sudan<\/span>"
                }
            },
            "SS": {
                "value": "10314021",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">South Sudan<\/span>"
                }
            },
            "LK": {
                "value": "20869000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span>"
                }
            },
            "SE": {
                "value": "9453000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sweden<\/span>"
                }
            },
            "CH": {
                "value": "7907000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Switzerland<\/span>"
                }
            },
            "SR": {
                "value": "529419",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Suriname<\/span>"
                }
            },
            "SZ": {
                "value": "1067773",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Swaziland<\/span>"
                }
            },
            "SY": {
                "value": "20820311",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span>"
                }
            },
            "TJ": {
                "value": "6976958",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tajikistan<\/span>"
                }
            },
            "TZ": {
                "value": "46218486",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span>"
                }
            },
            "TD": {
                "value": "11525496",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Chad<\/span>"
                }
            },
            "CZ": {
                "value": "10546000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Czech Republic<\/span>"
                }
            },
            "TH": {
                "value": "69518555",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Thailand<\/span>"
                }
            },
            "TL": {
                "value": "1175880",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Timor-leste<\/span>"
                }
            },
            "TG": {
                "value": "6154813",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Togo<\/span>"
                }
            },
            "TO": {
                "value": "104509",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tonga<\/span>"
                }
            },
            "TT": {
                "value": "1346350",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span>"
                }
            },
            "TN": {
                "value": "10673800",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tunisia<\/span>"
                }
            },
            "TM": {
                "value": "5105301",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span>"
                }
            },
            "TR": {
                "value": "73639596",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Turkey<\/span>"
                }
            },
            "TV": {
                "value": "9847",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tuvalu<\/span>"
                }
            },
            "VU": {
                "value": "245619",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Vanuatu<\/span>"
                }
            },
            "VE": {
                "value": "29278000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span>"
                }
            },
            "VN": {
                "value": "87840000",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Viet Nam<\/span>"
                }
            },
            "UA": {
                "value": "45706100",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Ukraine<\/span>"
                }
            },
            "UY": {
                "value": "3368595",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Uruguay<\/span>"
                }
            },
            "YE": {
                "value": "24799880",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Yemen<\/span>"
                }
            },
            "ZM": {
                "value": "13474959",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Zambia<\/span>"
                }
            },
            "ZW": {
                "value": "12754378",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span>"
                }
            },
            "GL": {
                "value": "12754378",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Greenland<\/span>"
                }
            },
            "EH": {
                "value": "12754378",
                "href": "#",
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Western Sahara<\/span>"
                }
            }
        }
    });
});
google.charts.load('43', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 96.0],
        ["Teaching", 91.8],
        ["Research", 99.5]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.8],
        ["Teaching", 92.1],
        ["Research", 98.8]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.7],
        ["Teaching", 93.6],
        ["Research", 96.8]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.2],
        ["Teaching", 91.9],
        ["Research", 92.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.1],
        ["Teaching", 94.5],
        ["Research", 97.2]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 93.6],
        ["Teaching", 90.1],
        ["Research", 98.4]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 92.3],
        ["Teaching", 89.9],
        ["Research", 93.6]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 91.3],
        ["Teaching", 91.6],
        ["Research", 93.5]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 90.3],
        ["Teaching", 85.8],
        ["Research", 87.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 90.2],
        ["Teaching", 90.2],
        ["Research", 90.1]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresA_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 11.0]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 10.9]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 7.4]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 8.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 6.5]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 9.1]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 8.2]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 5.2]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 11.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 6.1]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioA_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',40],
        ['Domestic',60]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',37],
        ['Domestic',63]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',23],
        ['Domestic',77]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',34],
        ['Domestic',66]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',29],
        ['Domestic',71]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',26],
        ['Domestic',74]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',24],
        ['Domestic',76]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',20],
        ['Domestic',80]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',56],
        ['Domestic',44]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',25],
        ['Domestic',75]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internA_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',46],
        ['Male',54]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',46],
        ['Male',54]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',43],
        ['Male',57]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',38],
        ['Male',62]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',33],
        ['Male',67]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',48],
        ['Male',52]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',45],
        ['Male',55]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',50],
        ['Male',50]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',38],
        ['Male',62]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',44],
        ['Male',56]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioA_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 96.0],
        ["Teaching", 91.8],
        ["Research", 99.5]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 11.0]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',40],
        ['Domestic',60]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',46],
        ['Male',54]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_1'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.8],
        ["Teaching", 92.1],
        ["Research", 98.8]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 10.9]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',37],
        ['Domestic',63]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',46],
        ['Male',54]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_2'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.7],
        ["Teaching", 93.6],
        ["Research", 96.8]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 7.4]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',23],
        ['Domestic',77]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',43],
        ['Male',57]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_3'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.2],
        ["Teaching", 91.9],
        ["Research", 92.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 8.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',34],
        ['Domestic',66]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',38],
        ['Male',62]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_4'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 94.1],
        ["Teaching", 94.5],
        ["Research", 97.2]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 6.5]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',29],
        ['Domestic',71]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',33],
        ['Male',67]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_5'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 93.6],
        ["Teaching", 90.1],
        ["Research", 98.4]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 9.1]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',26],
        ['Domestic',74]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',48],
        ['Male',52]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_6'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 92.3],
        ["Teaching", 89.9],
        ["Research", 93.6]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 8.2]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',24],
        ['Domestic',76]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',45],
        ['Male',55]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_7'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 91.3],
        ["Teaching", 91.6],
        ["Research", 93.5]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 5.2]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',20],
        ['Domestic',80]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',50],
        ['Male',50]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_8'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 90.3],
        ["Teaching", 85.8],
        ["Research", 87.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        },
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 11.7]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',56],
        ['Domestic',44]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',38],
        ['Male',62]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_9'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Scores"],
        ["Overall", 90.2],
        ["Teaching", 90.2],
        ["Research", 90.1]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Ranking Scores',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Scores'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ScoresB_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Categories", "Ratio"],
        ["", 6.1]
      ]);

      var options = {
        width: 600,
        height: 200,
        title: 'Student to Staff Ratio',
        chartArea: {width: '40%'},
        hAxis: {
          title: 'Students per staff'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('ssratioB_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['International', 'Ratio'],
        ['International',25],
        ['Domestic',75]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Percentage of International Students'
      };

      var chart = new google.visualization.PieChart(document.getElementById('internB_10'));

      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ['Sex', 'Ratio'],
        ['Female',44],
        ['Male',56]
      ]);

      var options = {
        width: 600,
        height: 200,
        chartArea: {width: '50%'},
        title: 'Female to Male Ratio'
      };

      var chart = new google.visualization.PieChart(document.getElementById('fmratioB_10'));

      chart.draw(data, options);
    }

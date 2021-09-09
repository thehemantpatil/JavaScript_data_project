import csv

india, south_asia, saarc, grouped_asian = {}, {}, {}, {}

coutry_name = ["Brunei Darussalam", "Cambodia", "Indonesia",
               "Lao", "Malaysia", "Myanmar", "Philippines",
               "Singapore", "Thailand", "Viet Nam"]


def solve():
    with open('python/population.csv') as pop_table:
        table = csv.reader(pop_table)

        # this for loop is doing structurize data needed for plotting graph
        for region in table:
            """
                - filter out indian population over year
                - second elif is for to fiter out population of
                    south east asian countries in year 2014.
                    There are have total 10 countries in South east Asia.
                - Third elif is for to filter out southern asian countries
                    Population of all the years.
                - Fourth elif loop filter out the population of Asia from year
                    2004 to 2014
                - Last else is for to break the loop if got all the
                    expected values. It will reduce the extra iteration.
            """
            if(region[2].isdigit()):
                if(region[0] == "India"):
                    india[int(region[2])] = float(region[-1])
                elif(int(region[2]) == 2014):
                    if(region[0] in coutry_name):
                        i1 = region[0].split(" ")
                        south_asia[i1[0]] = float(region[-1])
                elif(region[0] == "Southern Asia"):
                    saarc[int(region[2])] = float(region[-1])
                elif(region[0] == "ASIA" and 2004 <= int(region[2]) < 2015):
                    grouped_asian[int(region[2])] = float(region[-1])
                else:
                    if(len(india.keys()) != 0 and len(south_asia.keys()) != 0
                       and len(saarc.keys()) == 10 and
                       len(grouped_asian.keys()) != 0):
                        break

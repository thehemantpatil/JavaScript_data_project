import json
import solve


def json_transformer():
    """
        -   keys of file_ data is containing the file name
            and path to create file.
        -   values of file data is the required dictonary object of all the
            scenarious.
    """

    file_data = {'python/json/india_population.json': solve.india,
                 'python/json/south_asia_population.json': solve.south_asia,
                 'python/json/saarc_population.json': solve.saarc,
                 'python/json/asia_population.json': solve.grouped_asian}

    # creating a list of all the keys in a file_data.
    file_names = file_data.keys()

    """
        - for loop is iterating over all the list of names.
        - Writing their respective json converted object into the
          respective  files.
    """

    for filename in file_names:
        with open(filename, "w") as file:
            json.dump(file_data[filename], file, indent=2)

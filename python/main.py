import solve
import write_json

if __name__ == '__main__':
    solve.solve()
    # write_json file is for to convert dictonary into json format.
    # write converted json object into the respective files.
    write_json.json_transformer()

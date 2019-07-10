export default class DataService {
  getLocalStorage() {
    let data = [];
    try {
      data = JSON.parse(localStorage.getItem("dataList"));
    } catch (error) {
      console.info("List is empty");
      return [];
    }
  }
  setLocalStorage(
    fname = null,
    lname = null,
    Email = null,
    tel = null,
    device = null,
    model = null,
    serialN = null,
    purchaseDate = null,
    problem = null,
    upload = null
  ) {
    if (
      fname == null ||
      lname == null ||
      Email == null ||
      tel == null ||
      device == null ||
      model == null ||
      serialN == null
    ) {
      console.error(
        "All the arguments exept purches date, problem description and attaching file are required"
      );
    }
    let data = localStorage.getItem("dataList");

    if (data == null) {
      data = [];
      data.push({
        fname,
        lname,
        Email,
        tel,
        device,
        model,
        serialN,
        purchaseDate,
        problem,
        upload
      });
    } else {
      data = JSON.parse(data);
      data.push({
        fname,
        lname,
        Email,
        tel,
        device,
        model,
        serialN,
        purchaseDate,
        problem,
        upload
      });
    }
    localStorage.setItem("dataList", JSON.stringify(data));
  }
}

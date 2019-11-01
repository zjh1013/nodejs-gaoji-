const { Service } = require("egg");

class HomeService extends Service {
  async details({ id }) {
    console.log(id);

    const $sql = await this.app.mysql.get("liebiao", { id });
    const result = this.app.mysql.query($sql);
    return result;
  }
}
module.exports = HomeService;

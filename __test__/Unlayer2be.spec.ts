import asset from "assert";
import { BeeDesign } from "../src/model/bee.model";
import { Unlayer2be } from "../src/utils/Unlayer2be";

describe("Util:Unlayer2be", function () {
  it("from, should return UnlayerDesign ", function () {
    Object.keys(
      Unlayer2be.from(
        "%7B%22counters%22%3A%7B%22u_column%22%3A1%2C%22u_row%22%3A1%2C%22u_content_heading%22%3A1%7D%2C%22body%22%3A%7B%22rows%22%3A%5B%7B%22cells%22%3A%5B1%5D%2C%22columns%22%3A%5B%7B%22contents%22%3A%5B%7B%22type%22%3A%22heading%22%2C%22values%22%3A%7B%22containerPadding%22%3A%2210px%22%2C%22headingType%22%3A%22h1%22%2C%22fontFamily%22%3A%7B%22label%22%3A%22Arial%22%2C%22value%22%3A%22arial%2Chelvetica%2Csans-serif%22%7D%2C%22fontSize%22%3A%2222px%22%2C%22textAlign%22%3A%22left%22%2C%22lineHeight%22%3A%22140%25%22%2C%22linkStyle%22%3A%7B%22inherit%22%3Atrue%2C%22linkColor%22%3A%22%230000ee%22%2C%22linkHoverColor%22%3A%22%230000ee%22%2C%22linkUnderline%22%3Atrue%2C%22linkHoverUnderline%22%3Atrue%7D%2C%22displayCondition%22%3Anull%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_content_heading_1%22%2C%22htmlClassNames%22%3A%22u_content_heading%22%7D%2C%22selectable%22%3Atrue%2C%22draggable%22%3Atrue%2C%22duplicatable%22%3Atrue%2C%22deletable%22%3Atrue%2C%22hideable%22%3Atrue%2C%22text%22%3A%22Heading%22%7D%7D%5D%2C%22values%22%3A%7B%22backgroundColor%22%3A%22%22%2C%22padding%22%3A%220px%22%2C%22border%22%3A%7B%7D%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_column_1%22%2C%22htmlClassNames%22%3A%22u_column%22%7D%7D%7D%5D%2C%22values%22%3A%7B%22displayCondition%22%3Anull%2C%22columns%22%3Afalse%2C%22backgroundColor%22%3A%22%22%2C%22columnsBackgroundColor%22%3A%22%22%2C%22backgroundImage%22%3A%7B%22url%22%3A%22%22%2C%22fullWidth%22%3Atrue%2C%22repeat%22%3Afalse%2C%22center%22%3Atrue%2C%22cover%22%3Afalse%7D%2C%22padding%22%3A%220px%22%2C%22hideDesktop%22%3Afalse%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_row_1%22%2C%22htmlClassNames%22%3A%22u_row%22%7D%2C%22selectable%22%3Atrue%2C%22draggable%22%3Atrue%2C%22duplicatable%22%3Atrue%2C%22deletable%22%3Atrue%2C%22hideable%22%3Atrue%7D%7D%5D%2C%22values%22%3A%7B%22textColor%22%3A%22%23000000%22%2C%22backgroundColor%22%3A%22%23e7e7e7%22%2C%22backgroundImage%22%3A%7B%22url%22%3A%22%22%2C%22fullWidth%22%3Atrue%2C%22repeat%22%3Afalse%2C%22center%22%3Atrue%2C%22cover%22%3Afalse%7D%2C%22contentWidth%22%3A%22500px%22%2C%22contentAlign%22%3A%22center%22%2C%22fontFamily%22%3A%7B%22label%22%3A%22Arial%22%2C%22value%22%3A%22arial%2Chelvetica%2Csans-serif%22%7D%2C%22preheaderText%22%3A%22%22%2C%22linkStyle%22%3A%7B%22body%22%3Atrue%2C%22linkColor%22%3A%22%230000ee%22%2C%22linkHoverColor%22%3A%22%230000ee%22%2C%22linkUnderline%22%3Atrue%2C%22linkHoverUnderline%22%3Atrue%7D%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_body%22%2C%22htmlClassNames%22%3A%22u_body%22%7D%7D%7D%2C%22schemaVersion%22%3A7%7D"
      )
    ).forEach((key) => {
      describe(`should contain ${key}`, () => {
        asset.strictEqual(
          ["body", "schemaVersion", "counters"].includes(key),
          true
        );
      });
    });
  });

  it("design, should return error message ", () => {
    try {
      Unlayer2be.design({} as BeeDesign);
    } catch (error: any) {
      asset.strictEqual(error.message, "design must have page");
    }
  });

  it("fromHtml, should return UnlayerDesign ", function () {
    Object.keys(
      Unlayer2be.fromHtml(
        "%7B%22counters%22%3A%7B%22u_column%22%3A1%2C%22u_row%22%3A1%2C%22u_content_heading%22%3A1%7D%2C%22body%22%3A%7B%22rows%22%3A%5B%7B%22cells%22%3A%5B1%5D%2C%22columns%22%3A%5B%7B%22contents%22%3A%5B%7B%22type%22%3A%22heading%22%2C%22values%22%3A%7B%22containerPadding%22%3A%2210px%22%2C%22headingType%22%3A%22h1%22%2C%22fontFamily%22%3A%7B%22label%22%3A%22Arial%22%2C%22value%22%3A%22arial%2Chelvetica%2Csans-serif%22%7D%2C%22fontSize%22%3A%2222px%22%2C%22textAlign%22%3A%22left%22%2C%22lineHeight%22%3A%22140%25%22%2C%22linkStyle%22%3A%7B%22inherit%22%3Atrue%2C%22linkColor%22%3A%22%230000ee%22%2C%22linkHoverColor%22%3A%22%230000ee%22%2C%22linkUnderline%22%3Atrue%2C%22linkHoverUnderline%22%3Atrue%7D%2C%22displayCondition%22%3Anull%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_content_heading_1%22%2C%22htmlClassNames%22%3A%22u_content_heading%22%7D%2C%22selectable%22%3Atrue%2C%22draggable%22%3Atrue%2C%22duplicatable%22%3Atrue%2C%22deletable%22%3Atrue%2C%22hideable%22%3Atrue%2C%22text%22%3A%22Heading%22%7D%7D%5D%2C%22values%22%3A%7B%22backgroundColor%22%3A%22%22%2C%22padding%22%3A%220px%22%2C%22border%22%3A%7B%7D%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_column_1%22%2C%22htmlClassNames%22%3A%22u_column%22%7D%7D%7D%5D%2C%22values%22%3A%7B%22displayCondition%22%3Anull%2C%22columns%22%3Afalse%2C%22backgroundColor%22%3A%22%22%2C%22columnsBackgroundColor%22%3A%22%22%2C%22backgroundImage%22%3A%7B%22url%22%3A%22%22%2C%22fullWidth%22%3Atrue%2C%22repeat%22%3Afalse%2C%22center%22%3Atrue%2C%22cover%22%3Afalse%7D%2C%22padding%22%3A%220px%22%2C%22hideDesktop%22%3Afalse%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_row_1%22%2C%22htmlClassNames%22%3A%22u_row%22%7D%2C%22selectable%22%3Atrue%2C%22draggable%22%3Atrue%2C%22duplicatable%22%3Atrue%2C%22deletable%22%3Atrue%2C%22hideable%22%3Atrue%7D%7D%5D%2C%22values%22%3A%7B%22textColor%22%3A%22%23000000%22%2C%22backgroundColor%22%3A%22%23e7e7e7%22%2C%22backgroundImage%22%3A%7B%22url%22%3A%22%22%2C%22fullWidth%22%3Atrue%2C%22repeat%22%3Afalse%2C%22center%22%3Atrue%2C%22cover%22%3Afalse%7D%2C%22contentWidth%22%3A%22500px%22%2C%22contentAlign%22%3A%22center%22%2C%22fontFamily%22%3A%7B%22label%22%3A%22Arial%22%2C%22value%22%3A%22arial%2Chelvetica%2Csans-serif%22%7D%2C%22preheaderText%22%3A%22%22%2C%22linkStyle%22%3A%7B%22body%22%3Atrue%2C%22linkColor%22%3A%22%230000ee%22%2C%22linkHoverColor%22%3A%22%230000ee%22%2C%22linkUnderline%22%3Atrue%2C%22linkHoverUnderline%22%3Atrue%7D%2C%22_meta%22%3A%7B%22htmlID%22%3A%22u_body%22%2C%22htmlClassNames%22%3A%22u_body%22%7D%7D%7D%2C%22schemaVersion%22%3A7%7D"
      )
    ).forEach((key) => {
      describe(`should contain ${key}`, () => {
        asset.strictEqual(
          ["body", "schemaVersion", "counters"].includes(key),
          true
        );
      });
    });
  });
});

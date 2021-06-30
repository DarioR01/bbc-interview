import { render, fireEvent} from "@testing-library/react"

import Article from "../Components/Article"

/*Custom Test data to test Article Component*/
const renderTitle ={
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: []
}

const renderHeading = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "heading",
            model: {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        }
    ]
}

const renderParagraphs = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "paragraph",
            model: {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        }
    ]
}

const renderImage = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "image",
            model: {
              url: "https://picsum.photos/640/420/?random",
              altText: "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
              height: "420",
              width: "640"
            }
        }
    ]
}


const renderUnorderedList = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "list",
            model: {
              type: "unordered",
              items: [
                "Vestibulum viverra viverra ullamcorper",
                "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
              ]
            }
          }
    ]
}

const renderOrderedList = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "list",
            model: {
                type: "ordered",
                items: [
                "Vestibulum viverra viverra ullamcorper",
                "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                ]
            }
            }
    ]
}


const renderUnorderedListWithNoItems = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "list",
            model: {
                type: "unordered",
                items: []
            }
            }
    ]
}
const renderOrderedListWithNoItems = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "list",
            model: {
                type: "ordered",
                items: []
            }
            }
    ]
}

const unexpectedType = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: [
        {
            type: "thisIsAnUnexpectedType",
            model: {
                type: "ordered",
                items: []
            }
            }
    ]
}

const undefinedModel= undefined;

it("checkArticleRendersHeading", () =>{
    const {queryByTestId} = render(<Article model={renderHeading}/>);
    const testRender = queryByTestId("heading");
    expect(testRender).toBeTruthy();
})

it("checkArticleRendersTitle", () =>{
    const {queryByTestId} = render(<Article model={renderTitle}/>);
    const testRender = queryByTestId("title");
    expect(testRender).toBeTruthy();
})

it("checkArticleRendersParagraphs", () =>{
    const {queryByTestId} = render(<Article model={renderParagraphs}/>);
    const testRender = queryByTestId("paragraphs");
    expect(testRender).toBeTruthy();
})

it("checkArticleRendersImage", () =>{
    const {queryByTestId} = render(<Article model={renderImage}/>);
    const testRender = queryByTestId("image");
    expect(testRender).toBeTruthy();
})

it("checkArticleRendersOrderedList", () =>{
    const {queryByTestId, queryAllByTestId} = render(<Article model={renderOrderedList}/>);
    const testRender = queryByTestId("orderedList");
    expect(testRender).toBeTruthy();

    const testItems = queryAllByTestId("orderedListItem");
    expect(testItems.length).toBe(2);
})

it("checkArticleRendersUnorderedList", () =>{
    const {queryByTestId, queryAllByTestId} = render(<Article model={renderUnorderedList}/>);
    const testRender = queryByTestId("unorderedList");
    expect(testRender).toBeTruthy();

    const testItems = queryAllByTestId("unorderedListItem");
    expect(testItems.length).toBe(2);
})

it("checkArticleRendersOrderedListWithNoItems", () =>{
    const {queryByTestId, queryAllByTestId} = render(<Article model={renderOrderedListWithNoItems}/>);
    const testRender = queryByTestId("orderedList");
    expect(testRender).toBeTruthy();

    const testItems = queryAllByTestId("orderedListItem");
    expect(testItems.length).toBe(0);
})

it("checkArticleRendersUnorderedListWithNoItems", () =>{
    const {queryByTestId, queryAllByTestId} = render(<Article model={renderUnorderedListWithNoItems}/>);
    const testRender = queryByTestId("unorderedList");
    expect(testRender).toBeTruthy();

    const testItems = queryAllByTestId("unorderedListItem");
    expect(testItems.length).toBe(0);
})


it("checkErrorRendersOnUndefinedInput", () =>{
    const {queryByTestId} = render(<Article model={undefinedModel}/>);
    const testRender = queryByTestId("error");
    expect(testRender).toBeTruthy();
})


it("checkErrorRendersOnUndefinedInput", () =>{
    const {queryByTestId} = render(<Article model={unexpectedType}/>);
    const testRender = queryByTestId("error");
    expect(testRender).toBeTruthy();
})
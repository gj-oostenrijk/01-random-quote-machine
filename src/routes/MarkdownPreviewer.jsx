import React from 'react';
import '../App.css';
import { marked } from 'marked';

const defaultInput = "# Heading 1\n## Heading 2\n[Duck Duck Go](https://duckduckgo.com)\n`nano`\n\n```a code block```\n1. list item\n>a blockquote\n\n![Sharkie](https://drscdn.500px.org/photo/1022302567/m%3D900/v2?sig=83d898fa3aad472c4b824a7a80c1f047c448672db8cc6de1f18e7b0c1fc271f1 'Shark')\n\nand **bolded** text.";

export default class MarkdownPreviewer extends React.Component {
    constructor() {
    
      super();
      this.state = {
        input: defaultInput
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
  
  
  
    render() {
      return (
        <div id="markdownPreviewer">
            <textarea 
                id="editor"
                value={this.state.input}
                onChange={this.handleChange}
                rows="20" cols="100"
                >Hallo?</textarea>
                <hr />
                <h1>And see down here our beautiful render👇</h1>
                <hr/>
            <div id="preview" dangerouslySetInnerHTML={
                {
                    __html:marked.parse(this.state.input)
                }
                }></div>
        </div>
      );
    };
  
};
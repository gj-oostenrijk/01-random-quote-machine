import React from 'react';
import '../App.css';
import { marked } from 'marked';

const defaultInput = "# Heading 1\n## Heading 2\n[Duck Duck Go](https://duckduckgo.com)\n`nano`\na code block\n1. list item\n>a blockquote\nan image\nand **bolded** text.";

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
                rows="10" cols="50"
                >Hallo?</textarea>
            <div id="preview" >
                {marked.parse(this.state.input)}
            </div>

        </div>
      );
    };
  
};
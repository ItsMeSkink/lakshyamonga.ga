import React, { useState } from "react";
import $ from 'jquery'

import { FontFamily } from "./FontFamiily";
import { DecreaseFontSize, IncreaseFontSize, ManualFontSize } from "./FontSize";
import {bui} from './BUI'
import { FontColor, Highlight } from "./FontColor_Highlight";
import { Hyperlink } from "./Hyperlink";
import { alignment } from "./Alignment";
import { Unorderedlist } from "./UnorderedLitsts";
import { Orderedlist } from "./OrderedLists";
import { Image, Video } from "./Image_Video";
import { ideas } from "./Ideas";
import { TextTypes } from "./TextTypes";
import { Thesauras } from "./Thesauras";
import { Spacing } from "./Spacing";
import { Table } from "./Table";
import { Translate, Dictate } from "./Translate_Dictate";



export default function Text_Functions() {
  setTimeout(() => {
    $('#content').focus()
  }, 1);

  return (
    <div id="textedit">
      <h1 id="edittitle">Title</h1>
      <div>
        <div id="fontfamily-fontsize">
          {FontFamily()}
          {DecreaseFontSize()}
          {ManualFontSize()}
          {IncreaseFontSize()}
        </div>
        <div id="bui-fontcolor-highlight-hyperlink">
          {bui()}
          {FontColor()}
          {Highlight()}
          {Hyperlink()}
        </div>
        <div id="alignment-lists-table">
          {alignment()}
          {Unorderedlist()}
          {Orderedlist()}
          {Table()}
        </div>
        <div id="spacing-texttypes">
          {Spacing()}
          {TextTypes()}
        </div>
        <div id="translate-dictate-image-video-ideas">
          {Translate()}
          {Dictate()}
          {Image()}
          {Video()}
          {ideas()}
        </div>
        <div id="thesauras-imageedit">
          {Thesauras()}
        </div>
      </div>
    </div>
  );
}

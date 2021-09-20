extern crate visdom;
extern crate serde_json;
extern crate serde;

use std::fs;
use std::fs::File;
use std::io::Read;
use visdom::Vis;
use serde::{Serialize};


#[derive(Debug, Serialize)]
struct WordRoot {
  // 标记
  sign: String,
  // 例字
  sample_word: String,
  // 字根编码
  id: String,
  // 例字 unicode
  sample_unicode: String,
  // 字根 unicode
  unicode: String,
}

fn main() {
  let mut file = File::open("../新世纪五笔字根图-v1.1/wmwb06-font/wmwb06.html")
    .unwrap();
  let mut res = String::new();
  file.read_to_string(&mut res).unwrap();

  let root = Vis::load(&res).unwrap();
  let tr_list = root.find("tbody tr");

  let mut word_roots: Vec<WordRoot> = Vec::new();

  let mut i = 0;
  for tr in tr_list {
    let td_list = tr.children();
    let td_items: Vec<String> = td_list.map(|index, item| {
      if index > 4 {
        return String::from("");
      }
      item.text()
    });

    let word_root = WordRoot{
      sign: td_items[0].to_string(),
      sample_word: td_items[1].to_string(),
      id: td_items[2].to_string(),
      sample_unicode: td_items[3].to_string(),
      unicode: td_items[4].to_string(),
    };

    word_roots.push(word_root);
    // if i > 3 {
    //   break;
    // }
    i += 1;
  }

  let text = serde_json::to_string(&word_roots).unwrap();
  fs::write("word_roots.json", &text).unwrap();
  println!("Trans complete with {} total roots", i);
}

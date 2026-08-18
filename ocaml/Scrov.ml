type command =
  | Route of string
  | Rest of string
  | Dom of string
  | XPath of string
  | Lua of string
  | Shell of string

let classify input =
  let value = String.trim input in
  if String.starts_with ~prefix:"route " value then
    Route value
  else if String.starts_with ~prefix:"rest " value then
    Rest value
  else if String.starts_with ~prefix:"dom " value then
    Dom value
  else if String.starts_with ~prefix:"xpath " value then
    XPath value
  else if String.starts_with ~prefix:"lua " value then
    Lua value
  else
    Shell value

let name = function
  | Route _ -> "route"
  | Rest _ -> "rest"
  | Dom _ -> "dom"
  | XPath _ -> "xpath"
  | Lua _ -> "lua"
  | Shell _ -> "shell"

let classify_name input =
  name (classify input)

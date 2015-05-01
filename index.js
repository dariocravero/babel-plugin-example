module.exports = function (babel) {
  var t = babel.types;
  
  return new babel.Transformer("plugin-example", {
    FunctionDeclaration: function (node, parent) {
      var id = node.id;
      node.type = "FunctionExpression";
      node.id   = null;

      return t.variableDeclaration("var", [
        t.variableDeclarator(id, node)
      ]);
    }
  });
};

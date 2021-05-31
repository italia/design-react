function defaultTemplate(
  { template },
  opts,
  { imports, componentName, props, jsx, interfaces }
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
    ${interfaces}
  export const ${componentName} = (${props}) => {
    return ${jsx};
  };
    `;
}
module.exports = defaultTemplate;

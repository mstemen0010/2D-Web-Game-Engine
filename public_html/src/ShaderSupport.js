/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gSimpleShader = null;
var gShaderVertexPositionAttribute = null;

function loadAndCompileShader(id, shaderType) {
    var shaderText, shaderSource, compiledShader;
// Step A: Get the shader source from index.html
    shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
// Step B: Create the shader based on the source type: vertex or fragment
    compiledShader = gGL.createShader(shaderType);
// Step C: Compile the created shader
    gGL.shaderSource(compiledShader, shaderSource);
    gGL.compileShader(compiledShader);
// Step D: check for error and return result
    if (!gGL.getShaderParameter(compiledShader, gGL.COMPILE_STATUS)) {
        alert("A shader compiling error occurred: " +
                gGL.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
}

// Python code execution using Pyodide
let pyodideInstance: any = null

export async function loadPyodide() {
  if (pyodideInstance) return pyodideInstance

  // @ts-ignore - Pyodide is loaded from CDN
  const pyodide = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
  })

  pyodideInstance = pyodide
  return pyodide
}

export async function executePythonCode(code: string): Promise<{
  success: boolean
  output: string
  error?: string
}> {
  try {
    const pyodide = await loadPyodide()

    // Capture stdout
    let output = ""
    pyodide.setStdout({
      batched: (text: string) => {
        output += text
      },
    })

    // Execute the code
    await pyodide.runPythonAsync(code)

    return {
      success: true,
      output: output.trim(),
    }
  } catch (error: any) {
    return {
      success: false,
      output: "",
      error: error.message || "Unknown error occurred",
    }
  }
}

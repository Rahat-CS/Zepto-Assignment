<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website with Preview</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-2 gap-4">
            <!-- Item Section -->
            <div id="item-section" class="flex flex-col gap-4">
                <div>
                    <h2 class="text-xl font-semibold mb-2">Item Section</h2>
                </div>
                <div class="flex flex-col gap-2">
                    <button class="w-full mb-2 p-2 border border-gray-300 rounded bg-white text-left" id="heading-btn">Heading</button>
                    <div id="heading-section" class="hidden">
                        <input type="text" id="heading" class="w-full p-2 border border-gray-300 rounded" placeholder="Heading">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <button class="w-full mb-2 p-2 border border-gray-300 rounded bg-white text-left" id="image-btn">Image Upload</button>
                    <div id="image-section" class="hidden">
                        <input type="file" id="image" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <button class="w-full mb-2 p-2 border border-gray-300 rounded bg-white text-left" id="description-btn">Description</button>
                    <div id="description-section" class="hidden">
                        <textarea id="description" class="w-full h-32 p-2 border border-gray-300 rounded" placeholder="Description"></textarea>
                    </div>
                </div>
                <button id="preview-btn" class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">Preview</button>
            </div>
            <!-- Preview Section -->
            <div id="preview-section">
                <h2 class="text-xl font-semibold mb-2">Preview Section</h2>
                <div id="preview-content" class="p-4 border border-gray-300 rounded bg-white"></div>
            </div>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>

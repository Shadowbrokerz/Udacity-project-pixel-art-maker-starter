$(document).ready(function() {

    /**
     * @description Builds the grid
     * @constructor
     * @param {number} height - The height of the grid
     * @param {number} width - The width of the grid
     */
    function makeGrid(height, width) {
        let column = 1;
        while (column <= height) {
            $('#pixel_canvas').append(`<tr class="column${column}">`);
            for (let row = 1; row <= width; row++) {
                $(`.column${column}`).append(`<td class="row c${column}r${row}">`);
            }
            column++;
        }
    }

    /**
     * @description Picks the colour
     */
    function colorise() {
        $('.row').on('click', function() {
            const colour = $('#colorPicker').val();
            $(this).css('background', colour);
        });
    }

    /**
     * @description
     * When the user changes a number on any
     * of the fields, the grid will refresh
     * with the new values
     */
    $('#submit').on('click', function(e) {
        $('#pixel_canvas').children().remove();
        let gridHeight = $('#input_height').val();
        let gridWidth = $('#input_width').val();
        makeGrid(gridHeight, gridWidth);
        colorise();
    });

    //init
    makeGrid(1,1);
    colorise();
});
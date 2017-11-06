var VrudLib = (function () {


    var fix_array_range = function ft_fix_overflow(min, max, number) {
        var diff;
        if (number < min) {
            diff = min - number;
            return (max -  diff + 1);
        }
        if (number > max) {
            diff = number - max;
            return (min + diff - 1)
        }
        return (number);
    };

    // var fix_array_range = function ft_fix_array_owerflow(array_len, number) {
    //     if (number >= 0)
    //     {
    //         return (number % array_len);
    //     }
    //     return ((number % array_len + array_len) % array_len);
    // };



    var create_element = function create_html_element(elem_name ,id, class_tab, inner) {
        var i = 0;

        if (elem_name.length !== 0)
            var element = document.createElement(elem_name);

        if (id.length !== 0)
            element.setAttribute('id', id);

        while (i < class_tab.length)
        {
            element.classList.add(class_tab[i]);
            i++;
        }

        if(inner.length !== 0)
        {
            element.innerHTML(inner);
        }
        return element;
    };



    return {
        fixRange: fix_array_range,
        createElem : create_element
    };



})();
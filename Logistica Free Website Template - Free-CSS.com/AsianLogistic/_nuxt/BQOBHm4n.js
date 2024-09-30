function r(t){const e=t.match(new RegExp("^([0-9]{3})([0-9]{2})([0-9]{3})([0-9]{2})([0-9]{2})"));return e?`+${e[1]} (${e[2]}) ${e[3]} ${e[4]} ${e[5]}`:""}export{r as p};

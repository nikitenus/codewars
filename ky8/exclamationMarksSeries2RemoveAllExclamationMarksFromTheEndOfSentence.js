// DESCRIPTION:
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(s) {
    return s.replace(/!+$/, '');
};
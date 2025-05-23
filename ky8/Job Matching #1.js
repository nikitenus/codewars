function match(candidate, job) {
	if (candidate.minSalary && job.maxSalary) {
		return candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary
	} else throw 'Error'
}

let candidate1 = { minSalary: 120000 },
	job1 = { maxSalary: 130000 },
	job2 = { maxSalary: 80000 }

console.log(match(candidate1, job1))
console.log(match(candidate1, job2))
console.log(match(candidate1, job2))
console.log(match(job1))


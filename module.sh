#!/bin/bash
f=0
for d in $(npm ls --depth 0 --prod --parseable | tr -d '\r')
do
	l=0
	if [ $f == 0 ]
	then
		d=${d//\\//}
		f="$d/"
		continue
	fi
	d=${d//\\//}
	d=${d#"$f"}
	if [ -d "$d/dist/" ]
	then
		l=1
		cp -r "$d/dist/" "src/vendors/$d"
	elif [ -d "$d/build/" ]
	then
		l=1
		cp -r "$d/build/" "src/vendors/$d"
	elif [ -d "$d/assets/" ]
	then
		l=1
		cp -r "$d/assets/" "src/vendors/$d"
	elif [ -d "$d/js/" ]
	then
		l=1
		mkdir -p "src/vendors/$d"
		cp -r "$d/js/" "src/vendors/$d"
	fi
	if [ -d "$d/css/" ]
	then
		l=1
		mkdir -p "src/vendors/$d"
		cp -r "$d/css/" "src/vendors/$d"
	fi
	if [ -d "$d/images/" ]
	then
		l=1
		mkdir -p "src/vendors/$d"
		cp -r "$d/images/" "src/vendors/$d"
	fi
	if [ -d "$d/fonts/" ]
	then
		l=1
		mkdir -p "src/vendors/$d"
		cp -r "$d/fonts/" "src/vendors/$d"
	fi
	if [ $l == 0 ]
	then
		cp -r "$d/" "src/vendors/$d"
	fi
done
# /etc/skel/.bashrc
#
# This file is sourced by all *interactive* bash shells on startup,
# including some apparently interactive shells such as scp and rcp
# that can't tolerate any output.  So make sure this doesn't display
# anything or bad things will happen !


# Test for an interactive shell.  There is no need to set anything
# past this point for scp and rcp, and it's important to refrain from
# outputting anything in those cases.
if [[ $- != *i* ]] ; then
	# Shell is non-interactive.  Be done now!
	return
fi

# Midnight Commander chdir enhancement
if [ -f /usr/share/mc/mc.gentoo ]; then
    . /usr/share/mc/mc.gentoo
fi

# Put your fun stuff here.

export PERL5LIB=${HOME}/perl/lib64/perl5:${HOME}/perl/lib64/perl5/site_perl:${HOME}/perl/lib64/perl5/vendor_perl

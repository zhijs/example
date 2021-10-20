#!/bin/sh

PLUGIN_DESCRIPTION="branch master into feature/kardel-zhou-fanchang-ID862122695"
echo ${PLUGIN_DESCRIPTION}

_PLUGIN_DESCRIPTION=`echo -n $PLUGIN_DESCRIPTION | base64 -w 0`

echo $_PLUGIN_DESCRIPTION
#!/bin/bash

BUCKET='dietonika.pl'
aws s3 cp favicon.ico s3://$BUCKET/
aws s3 cp index.html s3://$BUCKET/
aws s3 cp --recursive img/ s3://$BUCKET/img/
aws s3 cp --recursive css/ s3://$BUCKET/css/
aws s3 cp --recursive fonts/ s3://$BUCKET/fonts/
aws s3 cp --recursive js/ s3://$BUCKET/js/
